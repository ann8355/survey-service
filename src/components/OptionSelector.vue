<template>
  <div class="selector">
    <div class="add">
      <span>{{ label }}</span>
      <span class="addBtn">
        <i @click="add()">新增</i>
      </span>
    </div>
    <ul>
        <li v-for="(option,idx) in optionContents" :key="idx" @click="focus(idx)">
          <Input :label="`${idx+1}.`" :txtLimited="10" @blur="getName" :value="option" />
          <i @click="remove(idx)">刪除</i>
        </li>
    </ul>
  </div>
</template>

<script>
import Input from '@/components/Input';

export default {
  name: 'OptionSelector',
  data() {
    return {
      optionContents: [],
      currentIdx: 0,
    };
  },
  components: {
    Input,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  watch: {
    optionContents(val) {
      this.$emit('change', val);
    },
  },
  methods: {
    add() {
      this.optionContents.push('');
    },
    remove(idx) {
      if (idx !== 0) {
        this.optionContents.splice(idx, 1);
      }
    },
    getName(val) {
      this.optionContents[this.currentIdx] = val;
    },
    focus(idx) {
      this.currentIdx = idx;
    },
  },
  mounted() {
    this.add();
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/base';

.add {
  color: lighten( $primary, 30% );
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: $h5;
  .addBtn {
    width: 58%;
    i {
      float: right;
    }
  }
}
ul > li{
  display: flex;
  align-items: center;
  position: relative;
  & /deep/ .input {
    padding-left: $h4;
    font-size: $h5;
    margin: $h4;
    width: 100%;
  }
  i {
    color: lighten( $primary, 30% );
    font-size: $h5;
    position: absolute;
    right: 8%;
  }
}
</style>
