<template>
  <Modal v-if="isShow" :ref="'delModal'" :title="'刪除確認'" :name="'delModal'"
    @confirm="onConfirm" @close="cancel">
      <p class="modal-content">確定要刪除此份問卷？</p>
  </Modal>
</template>

<script>
import Modal from '@/components/ConfirmModal';

export default {
  name: 'DeleteModal',
  components: {
    Modal,
  },
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    delId: {
      type: [String, Number],
    },
  },
  methods: {
    onConfirm() {
      this.$store.dispatch('delQes', this.delId);
      this.cancel();
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    cancel() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.$refs.delModal.show();
      }, 100);
    },
  },
};
</script>

