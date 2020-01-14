<template>
  <div class="block">
    <table class="table" id="table">
        <thead>
          <tr>
            <th v-for="(item,idx) in titles" :key="idx">{{ item }}</th>
          </tr>
        </thead>
        <slot name="content" :clicks="clicks"></slot>
    </table>
    <Modal v-if="isShow" :ref="'delModal'" :title="'刪除確認'" :name="'delModal'"
    @confirm="onConfirm" @close="cancel">
      <p class="modal-content">確定要刪除此份問卷？</p>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/ConfirmModal';

export default {
  name: 'Table',
  props: {
    titles: {
      type: Array,
    },
  },
  data() {
    return {
      isShow: false,
      delId: '',
    };
  },
  components: {
    Modal,
  },
  methods: {
    clicks(name, item) {
      if (name === 'edit') {
        this.$router.push(`/${item.getTime()}`);
      } else if (name === 'delete') {
        this.isShow = true;
        this.delId = item;
        setTimeout(() => {
          this.$refs.delModal.show();
        }, 100);
      }
    },
    onConfirm() {
      this.$store.dispatch('delQes', this.delId);
      this.cancel();
    },
    cancel() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/base";

.block {
  width: 100%;
}
.table {
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  width: inherit;
  thead {
    background-color: lighten( $primary, 55% );
    color: $white;
    font-size: $h3;
    th {
      padding: .75rem;
      &:first-child {
        border-top-left-radius: 20px;
      }
      &:last-child {
        border-top-right-radius: 20px;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: center;
        vertical-align: middle;
        font-size: $h4;
        color: lighten( $primary, 30% );
        border-right: 1px solid lighten( $primary, 90% );
        border-top: 1px solid lighten( $primary, 90% );
        background-color: darken( $white, 1% );
      }
      &:last-child td:first-child {
        border-bottom-left-radius: 20px;
      }
      &:last-child td:last-child {
        border-bottom-right-radius: 20px;
      }
    }
  }
}
.modal-content {
  font-size: $h4;
  margin: $h2;
  text-align: center;
}
</style>
