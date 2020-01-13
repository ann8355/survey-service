<template>
  <nav class="leftside-wrap">
    <div class="top">
      <i :style="{backgroundImage: img}"></i>
      <span>問券系統</span>
    </div>
    <ul class="menu">
      <li @click="display()" :class="['menu-list',{active: active1}]">
        <router-link to="/">
          <i></i>
          <span>問卷總覽</span>
        </router-link>
        <ul v-show="isShow">
          <li>測試</li>
          <li>測試</li>
        </ul>
      </li>
      <li :class="['menu-list',{active: active2}]" @click="openModal()">
        <i></i>
        <span>建立問卷</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'LeftSide',
  data() {
    return {
      isShow: false,
      active1: false,
      active2: false,
    };
  },
  computed: {
    img() {
      return `url(${require(`@/assets/images/${process.env.IMG_NAME}`)})`;
    },
  },
  methods: {
    display() {
      this.isShow = !this.isShow;
      this.active1 = true;
      this.active2 = false;
    },
    openModal() {
      this.isShow = !this.isShow;
      this.active1 = false;
      this.active2 = true;
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
</style>
