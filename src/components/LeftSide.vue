<template>
  <nav class="leftside-wrap">
    <div class="top">
      <i :style="{backgroundImage: img}"></i>
      <span>問卷系統</span>
    </div>
    <ul class="menu">
      <li @click="display()" :class="['menu-list',{active: active1}]">
        <router-link to="/">
          <i></i>
          <span>問卷總覽</span>
        </router-link>
        <ul v-show="items.length !== 0">
          <li v-for="(item,idx) in items" :key="idx" @click="link()">
            <!-- <router-link to="/">{{ item }}</router-link> -->
            {{ item }}
          </li>
        </ul>
      </li>
      <li :class="['menu-list',{active: active2}]" @click="openModal()">
        <i></i>
        <span>建立問卷</span>
      </li>
    </ul>
    <Modal :ref="'createModal'" :title="'新增問卷'" :name="'createModal'" :btnComfirm="'下一步'"
    @confirm="onConfirm">
      <div class="modal-body">
        <Input :label="'問卷名稱'" class="gap" :txtLimited="12" @value="getName"/>
      </div>
    </Modal>
    <QuesModal :ref="'createQues'" :title="'Q1'" @confirm="confirmQes" />
  </nav>
</template>

<script>
import Modal from '@/components/ConfirmModal';
import Input from '@/components/Input';
import QuesModal from '@/components/QuesModal';

export default {
  name: 'LeftSide',
  components: {
    Modal,
    Input,
    QuesModal,
  },
  data() {
    return {
      active1: false,
      active2: false,
      surveryName: '',
      items: [],
    };
  },
  computed: {
    img() {
      return `url(${require(`@/assets/images/${process.env.IMG_NAME}`)})`;
    },
  },
  methods: {
    display() {
      this.active1 = true;
      this.active2 = false;
    },
    openModal() {
      this.active1 = false;
      this.active2 = true;
      this.$refs.createModal.show();
    },
    getName(val) {
      this.surveryName = val;
    },
    onConfirm() {
      if (this.surveryName !== '' && this.surveryName !== undefined) {
        this.$refs.createModal.close();
        this.$refs.createQues.show(Date.now());
      }
    },
    confirmQes(val) {
      if (val.type === 1 || val.type === 4) {
        if (val.title !== '' && val.title !== undefined) {
          this.pass();
        }
      } else if (val.type === 2 || val.type === 3) {
        if (val.title !== '' && val.title !== undefined && val.options.indexOf('') === -1) {
          this.pass();
        }
      }
    },
    pass() {
      this.items.push(this.surveryName);
      this.$refs.createQues.close();
    },
    link() {
      this.$router.push(`/${this.surveryName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';
$color: #303030;
$gray: darken($white, 35%);

.leftside-wrap {
  position: fixed;
  top: 0;
  background-color: $color;
  color: $white;
  height: 100%;
  overflow-y: auto;
  width: 25%;
  float: left;
  border-right: $gray 1px solid;
  .top {
    display: flex;
    font-size: $h1;
    height: 6vw;
    padding: 0.6vw 1vw;
    align-items: center;
    border-bottom: $gray 1px solid;
    i {
      width: 5vw;
      height: 90%;
      background-size: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      margin-right: 12px;
    }
  }
  .menu {
    font-size: $h4;
  }
  .menu-list {
    border-bottom: $gray 1px solid;
    padding: 1.6vw 1vw;
    cursor: pointer;
    &:hover {
      background-color: lighten($color, 10%);
    };
    a {
      display: block;
    }
    ul {
      margin-top: 14px;
      font-size: $h5;
      margin-left: $h3;
      li {
        height: 3vw;
        display: flex;
        align-items: center;
        color: $white;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
.active {
  color: $gray;
}
.gap {
  margin: $h5;
}
</style>
