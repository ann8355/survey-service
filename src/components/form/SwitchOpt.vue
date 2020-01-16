<template>
  <div class="switch-block">
    <span>{{ label }}</span>
    <div class="switch-selector">
      <wpt-button class="left" :class="detectStyle(left)" @click="update(left)">
        <span slot="text">{{ options.left}}</span>
      </wpt-button>
      <wpt-button class="right" :class="detectStyle(right)" @click="update(right)">
        <span slot="text">{{ options.right}}</span>
      </wpt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchOpt',
  props: {
    label: {
      type: String,
    },
    options: {
      type: Object,
      required: true,
    },
    val: {
      type: Boolean,
    },
  },
  data() {
    return {
      right: false,
      left: true,
      value: this.val,
    };
  },
  methods: {
    detectStyle(value) {
      const style = [];
      if (value === this.value) style.push('active');
      return style;
    },
    update(value) {
      this.value = value;
      this.$emit('switchVal', value);
    },
  },
};

</script>

<style lang="scss">
@import '~@/assets/css/base';
$radius: 1vh;

.switch-block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: $h5;
    color: lighten( $primary, 30% );
  }
  .switch-selector {
    width: 58%;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    button {
      width: 50%;
      height: 6.5vh;
      background-color: $gray300;
    }
    .left {
      border-radius: $radius 0 0 $radius;
      &.active {
        background-color: $blue;
        span {
          color: $white;
        }
      }
    }
    .right {
      border-radius: 0 $radius $radius 0;
      &.active {
        background-color: $neon-carrot;
        span {
          color: $white;
        }
      }
    }
  }
}
</style>
