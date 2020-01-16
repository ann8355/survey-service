<template>
  <div class="head">
    <span class="name" v-if="!isEdited">
      {{ qesName }}
    </span>
    <Input class="name" :txtLimited="12" :value="qesName" @blur="getName" v-else />
    <template v-if="$route.path !== '/'">
      <template v-if="!isEdited">
        <i class="yif icon-compose" @click="update()"></i>
        <i class="yif icon-trash" @click="del()"></i>
      </template>
      <template v-else>
        <i class="yif icon-checkmark-outline" @click="save()"></i>
        <i class="yif icon-close-outline" @click="cancel()"></i>
      </template>
      <Modal :delId="qes.qesId" :ref="'deleteModal'" />
    </template>
  </div>
</template>

<script>
import Modal from '@/components/modal/DeleteModal';
import Input from '@/components/form/Input';

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
    font-size: $h5;
    color: darken( $white, 3% );
    &:hover {
      opacity: 0.7;
    }
  }
  & /deep/ .input .wpt-input {
    width: 100%;
    input {
      color: $white;
    }
  }
}
</style>
