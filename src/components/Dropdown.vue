<template>
<div class="dropdown">
  <label class="name">{{ label }}</label>
  <div class="select">
    <select v-model="val" @change="update">
      <template v-for="option in options">
        <option :value="option.value" :key="option.value" selected
        v-if="option.value === defaults">
          <span>{{option.name}}</span>
        </option>
        <option :value="option.value" :key="option.value"
        v-else>
          <span>{{option.name}}</span>
        </option>
      </template>
    </select>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      val: this.defaults,
    };
  },
  props: {
    label: {
      type: String,
    },
    defaults: {
      type: Number,
    },
    options: {
      type: Array,
    },
  },
  methods: {
    update() {
      this.$emit('input', this.val);
    },
  },
};

</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
@import '~@/assets/css/base';

.select {
  width: 58%;
  outline: none;

  select {
    color: $primary;
    padding-right: 0;
    background: none;
    border-radius: 0;
    border-width: 0 0 2px 0;
    border-color: lighten( $primary, 80% );
    width: 100%;
    box-shadow: none;

    &:focus, &:active, &:hover {
      border-color: $red;
      box-shadow: none;
    }
  }

  &:not(.is-multiple)::after {
    border-color: $gray500;
    border-width: 2px;
  }

  &:hover::after {
    border-color: $red;
  }
}
.dropdown {
  font-size: $h5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .name {
    color: lighten( $primary, 30% );
  }
}
</style>
