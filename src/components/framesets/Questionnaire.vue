<template>
 <div class="questions">
    <ul>
      <li v-for="(item,idx) in qesList" :key="idx">
        <div class="infoBlock">
          <span :class="['order', {required: item.required}]">{{ `${idx+1}.` }}</span>
          <p class="name">{{ item.title }}</p>
          <Input v-if="item.type === 1" />
          <div class="gap" v-else-if="item.type === 2">
            <span v-for="(opt,id) in item.options" :key="id">
              <input type="radio" :name="item.id" :value="opt" :checked="id === 0">{{ opt }}
            </span>
          </div>
          <div class="gap" v-else-if="item.type === 3">
            <span v-for="(opt,id) in item.options" :key="id">
              <input type="checkbox" :name="item.id" :value="opt" :checked="id === 0">
              {{ opt }}
            </span>
          </div>
          <div class="gap" v-else>
            <StarSelector v-for="(val,id) in item.level" :key="id" />
          </div>
        </div>
        <div class="btnBlock">
          <i class="yif icon-add-solid" @click="create(idx)"></i>
          <i class="yif icon-compose" @click="update(idx)"></i>
          <i class="yif icon-minus-solid" @click="del(item.id)"></i>
        </div>
      </li>
    </ul>
    <Modal :ref="'delqesModal'" :title="'刪除確認'" :name="'delqesModal'"
    @confirm="onConfirm">
      <p class="modal-content">確定要刪除此問題？</p>
    </Modal>
    <QuesModal :ref="'updateQues'" :title="`Q${action === 'create' ? selectIndex + 2 :
    selectIndex + 1}`" @confirm="confirmQes" />
</div>
</template>

<script>
import Input from '@/components/form/Input';
import Modal from '@/components/modal/ConfirmModal';
import QuesModal from '@/components/modal/QuesModal';
import StarSelector from '@/components/form/StarSelector';

export default {
  name: 'Questionnaire',
  data() {
    return {
      selectId: '',
      selectIndex: '',
      action: '',
    };
  },
  components: {
    Input,
    Modal,
    QuesModal,
    StarSelector,
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
    create(val) {
      this.action = 'create';
      this.selectIndex = val;
      const defaultInfo = {
        id: Date.now(),
        type: 1,
        level: 1,
        required: true,
        title: '',
        options: [],
      };
      this.$refs.updateQues.show(defaultInfo);
    },
    update(val) {
      this.action = 'update';
      this.selectIndex = val;
      const selectItem = this.qesList[val];
      const defaultInfo = {
        id: selectItem.id,
        type: selectItem.type,
        level: selectItem.level,
        required: selectItem.required,
        title: selectItem.title,
        options: selectItem.options,
      };
      this.$refs.updateQues.show(defaultInfo);
    },
    confirmQes(val) {
      const item = {
        qes: this.qesId,
        detail: val,
        idx: this.selectIndex,
      };
      if (this.action === 'create') {
        this.$store.dispatch('addQesDetail', item);
      } else {
        this.$store.dispatch('updateQesDetail', item);
      }
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
  padding: 2% 6%;
  box-sizing: border-box;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.2);
  background-color: darken( $white, 2% );
  font-size: $h4;
  ul {
    li {
      display: flex;
      align-items: center;
      margin: 22px 0;
      .order {
        margin-right: $h5;
      }
      .required {
        color: $red;
        &::before {
          content: '*';
          display: inline-block;
          margin-left: -13px;
          padding-right: 5px;
        }
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
        .icon-add-solid {
          color: $red;
        }
        .icon-compose {
          color: $neon-carrot;
        }
        .icon-minus-solid {
          color: lighten( $primary, 77% );
        }
      }
      i {
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
.gap {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  span {
    display: flex;
    align-items: center;
    font-size: $h5;
    margin: 0 $h5 10px 0;
  }
}
</style>
