<template>
  <span class="star">
    <input class="starCheck" type="checkbox" :checked="checked">
    <label id="star" for="star" class="yif icon-star-empty" @click="select()"></label>
  </span>
</template>

<script>
export default {
  name: 'StarSelector',
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    select() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style scoped lang="scss">
#star:hover::before, .starCheck:checked ~ #star::before{
  content:"\e90a";
  color: #F5A623;
}
.starCheck{
  display: none;
  position: absolute !important;
}
#star {
  cursor: pointer;
}
</style>
