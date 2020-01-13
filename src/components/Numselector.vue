<template>
  <div class="selector">
    <span>{{ label }}</span>
    <wpt-quantity :min="1" :max="max" v-model="num" class="quantity"></wpt-quantity>
  </div>
</template>

<script>
export default {
  name: 'Numselector',
  data() {
    return {
      num: 1,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
    },
  },
  watch: {
    num(val) {
      this.$emit('value', val);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';
$radius: 1vh;

.selector {
  display: flex;
  align-items: center;
  justify-content: space-around;
  & /deep/ * {
    color: lighten( $primary, 30% );
  }
  span {
    font-size: $h5;
  }
}
.quantity {
  width: 58%;
  & /deep/ * {
    text-align: center;
    width: inherit;
    line-height: 2.4em;
    font-size: $h5;
    border: 0;
    border-bottom: 2px solid lighten( $primary, 82% )!important;
  }
  & /deep/ button {
    padding: 0;
    border-radius: 0 $radius $radius 0;
    background-color: lighten( $primary, 88% );
    &:first-child {
      border-radius: $radius 0 0 $radius;
    }
  }
  & /deep/ input {
    background-color: lighten( $primary, 95% );
  }
}
</style>
