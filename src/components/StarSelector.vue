<template>
  <div class="star">
    <input class="starCheck" type="checkbox">
    <label id="star" for="star" class="yif icon-star-empty"></label>
  </div>
</template>

<script>
export default {
  name: 'StarSelector',
  data() {
    return {
    };
  },
  props: {
  },
  watch: {
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

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
