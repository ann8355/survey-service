<template>
  <div class="selector">
    <div class="add">
      <span>{{ label }}</span>
      <span class="addBtn">
        <i class="yif icon-add-outline" @click="add()"></i>
      </span>
    </div>
    <ul>
        <li v-for="(option,idx) in optionContents" :key="idx" @click="focus(idx)">
          <Input :label="`${idx+1}.`" :txtLimited="10" @blur="getName" :value="option" />
          <i class="yif icon-minus-outline" @click="remove(idx)"></i>
        </li>
    </ul>
  </div>
</template>

<script>
import Input from '@/components/form/Input';

export default {
  name: 'OptionSelector',
  data() {
    return {
      optionContents: JSON.parse(JSON.stringify(this.value)),
      currentIdx: '',
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
    value: {
      type: Array,
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
      if (this.currentIdx !== 0) {
        this.optionContents.splice(idx, 1);
      }
    },
    getName(val) {
      this.optionContents[this.currentIdx] = val;
      this.$emit('change', this.optionContents);
    },
    focus(idx) {
      this.currentIdx = idx;
    },
  },
  mounted() {
    if (this.value.length === 0) {
      this.add();
    }
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
    right: 7%;
  }
}
i {
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
