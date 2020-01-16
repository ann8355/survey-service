<template>
  <div class="content">
    <Questionnaire :qesList="qes.qesDetail" :qesId="qes.qesId" />
  </div>
</template>

<script>
import Questionnaire from '@/components/framesets/Questionnaire';

export default {
  name: 'QuesSetting',
  data() {
    return {
      qes: {},
    };
  },
  components: {
    Questionnaire,
  },
  methods: {
    init() {
      const id = this.$route.params.id;
      const array = this.$store.getters.qes;
      this.qes = array.find(ele => ele.qesId === Number(id));
    },
  },
  watch: {
    $route() {
      this.init();
    },
  },
  // beforeRouteUpdate() {
  //  this.init();
  // },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6vh 8%;
}
</style>
