<template>
 <div class="input">
  <span :class="{alert: alert}">{{ label }}</span>
  <wpt-input :genre="type" @input="inputTxt" @blur="blur" ref="field"></wpt-input>
 </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      alert: true,
      val: this.value,
    };
  },
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    txtLimited: {
      type: Number,
    },
    value: {
      type: [Number, String],
    },
  },
  watch: {
    value(val) {
      this.$refs.field.$el.querySelector('input').value = val;
    },
  },
  methods: {
    inputTxt() {
      if (this.txtLimited) {
        this.$refs.field.$el.querySelector('input').value = this.$refs.field.value.substr(0, this.txtLimited);
      }
      this.val = this.$refs.field.$el.querySelector('input').value;
      this.$emit('value', this.val);
      if (this.val !== undefined && this.val !== '') {
        this.alert = false;
      } else {
        this.alert = true;
      }
    },
    blur() {
      this.val = this.$refs.field.$el.querySelector('input').value;
      this.$emit('blur', this.val);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.input {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: $h5;
  span {
    color: lighten( $primary, 30% );
  }
  .wpt-input {
    width: 58%;
    & /deep/ input {
      border-bottom: 2px solid lighten( $primary, 80% );
      padding: 0 10px;
      &:focus {
        border-bottom: 2px solid $red;
      }
    }
  }
}
.alert {
  color: $red!important;
}
</style>
