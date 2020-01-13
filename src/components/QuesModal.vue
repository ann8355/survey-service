<template>
 <Modal :ref="'createQues'" :title="title" :name="'createQues'" @confirm="onConfirm">
      <div class="modal-body">
        <Input :label="'題目標題'" class="gap" :txtLimited="20" @value="getName"/>
        <Dropdown :label="'選擇題型'" class="gap" :defaults="defaults" :options="type"
        @input="changeType"></Dropdown>
        <SwitchOpt :label="'是否必選'" class="gap" :options="switchOption" @switchVal="getVal"/>
        <Numselector :label="'評分級數'" class="gap" :max="10" @value="getNum" />
        <OptionSelector v-if="showSelector" :label="'選項內容'" class="gap" @change="getOptions" />
      </div>
  </Modal>
</template>

<script>
import Modal from '@/components/ConfirmModal';
import Input from '@/components/Input';
import Dropdown from '@/components/Dropdown';
import SwitchOpt from '@/components/SwitchOpt';
import Numselector from '@/components/Numselector';
import OptionSelector from '@/components/OptionSelector';

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
      defaults: 1,
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
      this.$emit('confirm', this.info);
    },
    show(id) {
      this.$refs.createQues.show();
      this.info.id = id;
    },
    close() {
      this.$refs.createQues.close();
      this.info = {};
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
  mounted() {
    this.info.type = this.defaults;
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.gap {
  margin: $h4;
}
</style>
