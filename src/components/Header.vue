<template>
  <div class="head">
    <span  class="name">
      {{ $route.path === '/' ? '問卷總覽': qes.qesName }}
    </span>
    <template v-if="$route.path !== '/'">
      <i>編輯</i>
      <i @click="del()">刪除</i>
      <Modal :delId="qes.qesId" :ref="'deleteModal'" />
    </template>
  </div>
</template>

<script>
import Modal from '@/components/DeleteModal';

export default {
  name: 'Header',
  components: {
    Modal,
  },
  data() {
    return {
      qes: {},
    };
  },
  methods: {
    del() {
      this.$refs.deleteModal.show();
    },
  },
  updated() {
    const array = this.$store.getters.qes;
    const route = this.$route.params;
    if (route && route.id) {
      this.qes = array.find(ele => ele.qesId === Number(route.id));
    }
  },
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
  .name {
    margin-right: $h3;
  }
  i {
    cursor: pointer;
  }
}
</style>
