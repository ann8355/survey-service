<template>
  <div class="content">
    <Table :titles="titles" />
  </div>
</template>

<script>
import Table from '@/components/Table';

export default {
  name: 'Overview',
  data() {
    return {
      titles: ['問卷名稱', '建立時間', ''],
    };
  },
  components: {
    Table,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
