<template>
<div id="app" ontouchstart>
  <LeftSide />
  <Header />
  <router-view />
</div>
</template>

<script>
import LeftSide from '@/components/LeftSide';
import Header from '@/components/Header';

export default {
  name: 'Root',
  components: {
    LeftSide,
    Header,
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/base';

</style>
