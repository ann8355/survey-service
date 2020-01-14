<template>
  <div class="content">
  </div>
</template>

<script>
// import Table from '@/components/Table';

export default {
  name: 'QuesSetting',
  data() {
    return {
      qes: null,
    };
  },
  components: {
    // Table,
  },
  methods: {
  },
  mounted() {
    const id = this.$route.params.id;
    const array = this.$store.getters.qes;
    this.qes = array.find(ele => ele.qesId === Number(id));
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
