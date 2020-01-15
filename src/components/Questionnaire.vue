<template>
 <div class="questions">
    <ul>
      <li v-for="(item,idx) in qesList" :key="idx">
        <div class="infoBlock">
          <span class="order">{{ `${idx+1}.` }}</span>
          <p class="name">{{ item.title }}</p>
          <Input v-if="item.type === 1" />
        </div>
        <div class="btnBlock">
          <i>新增</i>
          <i>編輯</i>
          <i @click="del(item.id)">刪除</i>
        </div>
      </li>
    </ul>
    <Modal :ref="'delqesModal'" :title="'刪除確認'" :name="'delqesModal'"
    @confirm="onConfirm">
      <p class="modal-content">確定要刪除此問題？</p>
    </Modal>
</div>
</template>

<script>
import Input from '@/components/Input';
import Modal from '@/components/ConfirmModal';

export default {
  name: 'Questionnaire',
  data() {
    return {
      selectId: '',
    };
  },
  components: {
    Input,
    Modal,
  },
  props: {
    qesList: {
      type: Array,
    },
    qesId: {
      type: [Number, String],
    },
  },
  methods: {
    onConfirm() {
      const item = {
        qes: this.qesId,
        detail: this.selectId,
      };
      if (this.qesList.length === 1) {
        this.$store.dispatch('delQes', this.qesId);
        this.$router.push('/');
      } else {
        this.$store.dispatch('delQesDetail', item);
      }
      this.$refs.delqesModal.close();
    },
    del(id) {
      this.selectId = id;
      this.$refs.delqesModal.show();
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.questions {
  width: 100%;
  min-height: 75vh;
  color: lighten( $primary, 10% );
  border: 1px solid lighten( $primary, 80% );
  border-radius: $h6;
  padding: 4% 6%;
  box-sizing: border-box;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.2);
  background-color: darken( $white, 2% );
  font-size: $h4;
  ul {
    li {
      display: flex;
      align-items: center;
      .order {
        margin-right: $h5;
      }
      .name {
        word-break: break-all;
        display: inline-block;
        font-weight: bold;
      }
      & /deep/ .wpt-input {
        width:  100%;
      }
      .infoBlock {
        width:  40vw;
      }
      .btnBlock {
        width: 23%;
        display: flex;
        justify-content: space-between;
        margin-left: 5%;
      }
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
