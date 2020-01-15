<template>
  <div class="head">
    <span class="name" v-if="!isEdited">
      {{ qesName }}
    </span>
    <Input class="name" :txtLimited="12" :value="qesName" @blur="getName" v-else />
    <template v-if="$route.path !== '/'">
      <template v-if="!isEdited">
        <i @click="update()">編輯</i>
        <i @click="del()">刪除</i>
      </template>
      <template v-else>
        <i @click="save()">儲存</i>
        <i @click="cancel()">取消</i>
      </template>
      <Modal :delId="qes.qesId" :ref="'deleteModal'" />
    </template>
  </div>
</template>

<script>
import Modal from '@/components/DeleteModal';
import Input from '@/components/Input';

export default {
  name: 'Header',
  components: {
    Modal,
    Input,
  },
  data() {
    return {
      qes: {},
      isEdited: false,
      qesName: '問卷總覽',
      newName: '',
    };
  },
  methods: {
    del() {
      this.$refs.deleteModal.show();
      this.isEdited = false;
    },
    update() {
      this.isEdited = true;
    },
    save() {
      this.isEdited = false;
      this.qes.qesName = this.newName;
      // this.$store.dispatch('updateQes', item);
    },
    cancel() {
      this.isEdited = false;
    },
    getName(val) {
      this.newName = val;
    },
  },
  updated() {
    const array = this.$store.getters.qes;
    const route = this.$route.params;
    if (route && route.id) {
      this.qes = array.find(ele => ele.qesId === Number(route.id));
    }
    if (this.$route.path !== '/') {
      this.qesName = this.qes.qesName;
    } else {
      this.qesName = '問卷總覽';
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
  & /deep/ .input .wpt-input {
    width: 100%;
    input {
      color: $white;
    }
  }
}
</style>
