<template>
  <div class="head">
    {{ $route.path === '/' ? '問卷總覽': $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';
$color: #E0005A;

.head {
  background-color: $color;
  color: $white;
  padding: $h5;
  height: 6vh;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.26);
  display: flex;
  align-items: center;
  font-size: $h2;
}
</style>
