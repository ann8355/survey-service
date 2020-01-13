<template>
  <modal class="confirm-modal" height="auto"
    :name="name" :clickToClose="clickToClose">
    <div v-if="title" class="confirm-modal-header">{{title}}</div>
    <div class="confirm-modal-body">
      <slot></slot>
    </div>
    <div class="confirm-modal-footer">
      <wpt-button class="confirm-modal-yes btn" @click="confirm" v-if="btnComfirm">
        <span slot="text">{{btnComfirm}}</span>
      </wpt-button>
      <wpt-button class="confirm-modal-no btn" @click="close"
        :style="{width: !btnComfirm ? '80%':''}">
         <span slot="text">{{btnCancel}}</span>
      </wpt-button>
    </div>
  </modal>
</template>

<script>

export default {
  name: 'ConfirmModal',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    btnComfirm: {
      type: String,
      default: '確認',
    },
    btnCancel: {
      type: String,
      default: '取消',
    },
    clickToClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    show() {
      this.$modal.show(this.name);
    },
    close() {
      this.$modal.hide(this.name);
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/base";

$dove: lighten( $primary, 30% );
$alto: lighten( $primary, 90% );

.confirm-modal.v--modal-overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: auto;
  width: auto;
  background: rgba(0, 0, 0, .4);
  overflow: auto;
  .v--modal {
    width: 50%!important;
    position: static;
    border-radius: 2.5vh;
  }
  .v--modal-background-click {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v--modal-top-right {
    display: none;
  }
}
.confirm-modal-header {
  background-color: $alto;
  padding: $h5;
  text-align: center;
  color: $dove;
  font-size: $h3;
  font-weight: bold;
}
.confirm-modal-footer {
  display: flex;
  justify-content: center;
  height: 8vh;
  padding: $h5;
  button {
    width: 25%;
    font-size: $h6;
  }
  .confirm-modal-yes {
    background-color: $red;
    margin-right: $h5;
  }
  .confirm-modal-no {
    background-color: $alto;
    color: $dove;
  }
  .btn {
    padding: 0;
  }
}
</style>
