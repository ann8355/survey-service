<template>
 <Modal v-if="showModal" :ref="'createQues'" :title="title" :name="'createQues'"
 @confirm="onConfirm" @close="close">
      <div class="modal-body">
        <Input :label="'題目標題'" :value="info.title" class="gap" :txtLimited="50" @value="getName"/>
        <Dropdown :label="'選擇題型'" class="gap" :defaults="info.type" :options="type"
        @input="changeType"></Dropdown>
        <SwitchOpt class="gap" :label="'是否必選'" :val="info.required" :options="switchOption"
        @switchVal="getVal"/>
        <Numselector :value="info.level" v-if="showSwitch" :label="'評分級數'" class="gap" :max="10"
         @value="getNum" />
        <OptionSelector v-if="showSelector" :label="'選項內容'" :value="info.options" class="gap"
        @change="getOptions" />
      </div>
  </Modal>
</template>

<script>
import Modal from '@/components/modal/ConfirmModal';
import Input from '@/components/form/Input';
import Dropdown from '@/components/form/Dropdown';
import SwitchOpt from '@/components/form/SwitchOpt';
import Numselector from '@/components/form/Numselector';
import OptionSelector from '@/components/form/OptionSelector';

export default {
  name: 'QuesModal',
  components: {
    Modal,
    Input,
    Dropdown,
    SwitchOpt,
    Numselector,
    OptionSelector,
  },
  data() {
    return {
      info: {},
      type: [{
        value: 1,
        name: '文字',
      },
      { value: 2,
        name: '單選題',
      },
      { value: 3,
        name: '多選題',
      },
      { value: 4,
        name: '滿意度',
      }],
      switchOption: {
        left: '是',
        right: '否',
      },
      showSelector: false,
      showSwitch: false,
      showModal: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onConfirm() {
      const val = this.info;
      if (val.type === 1 || val.type === 4) {
        if (val.title !== '' && val.title !== undefined) {
          this.$emit('confirm', this.info);
          this.close();
          this.$refs.createQues.close();
        }
      } else if (val.type === 2 || val.type === 3) {
        if (val.title !== '' && val.title !== undefined && val.options.indexOf('') === -1) {
          this.$emit('confirm', this.info);
          this.close();
          this.$refs.createQues.close();
        }
      }
    },
    show(info) {
      this.showModal = true;
      setTimeout(() => {
        this.$refs.createQues.show();
      }, 100);
      this.info = info;
      if (this.info.type === 2 || this.info.type === 3) {
        this.showSelector = true;
      }
      if (this.info.type === 4) {
        this.showSwitch = true;
      }
    },
    close() {
      this.showModal = false;
      this.info = {};
      this.showSelector = false;
      this.showSwitch = false;
    },
    getName(val) {
      this.info.title = val;
    },
    changeType(val) {
      this.info.type = val;
      if (val === 2 || val === 3) {
        this.showSelector = true;
      } else {
        this.showSelector = false;
      }
      if (val === 4) {
        this.showSwitch = true;
      } else {
        this.showSwitch = false;
      }
    },
    getVal(val) {
      this.info.required = val;
    },
    getNum(val) {
      this.info.level = val;
    },
    getOptions(val) {
      this.info.options = val;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.gap {
  margin: $h4;
}
</style>
