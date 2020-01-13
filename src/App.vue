<template>
<div id="app" ontouchstart>
  <LeftSide />
  <section class="rightBlock">
    <Header />
    <router-view />
  </section>
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

.rightBlock {
  margin-left: 25%;
}
</style>
