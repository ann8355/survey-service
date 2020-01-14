<template>
  <div class="content">
    <Table :titles="titles">
      <template slot="content" slot-scope="scope">
      <tbody>
        <tr v-if="list.length === 0" style="height: 30vh;">
          <td :colspan="titles.length">無任何問卷資料</td>
        </tr>
        <tr class="has-data" v-for="(item,index) in list" :key="index" v-else
        :style="{height: `${length}vh`}">
            <td style="width: 48%;">
              <router-link :to="`/${item.qesId}`">{{ item.qesName }}</router-link>
            </td>
            <td>{{ formatTime(item.qesId) }}</td>
            <td>
              <wpt-button class="yellow tableBtn" @click="scope.clicks('edit',item.qesId)">
                <span slot="text">編輯</span>
              </wpt-button>
              <wpt-button class="gray tableBtn" @click="scope.clicks('delete',item.qesId)">
                <span slot="text">刪除</span>
              </wpt-button>
            </td>
        </tr>
      </tbody>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table';
// import Moment from 'moment';

export default {
  name: 'Overview',
  data() {
    return {
      titles: ['問卷名稱', '建立時間', ''],
      list: this.$store.getters.qes,
    };
  },
  computed: {
    length() {
      let size = 0;
      if (this.list.length > 4) {
        size = 10;
      } else if (this.list.length < 3) {
        size = 25;
      } else if (this.list.length < 4) {
        size = 15;
      } else {
        size = 13;
      }
      return size;
    },
  },
  components: {
    Table,
  },
  methods: {
    formatTime(time) {
      // return Moment(time).format('YYYY-MM-DD hh:mm:ss');
      return new Date(time).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/base';

.content {
  display: flex;
  // align-items: center;
  justify-content: center;
  margin: 6vh 0;
  padding: 0 8%;
}
.tableBtn {
  width: 45%;
  font-size: $h4;
  color: $white;
}
.yellow {
  background-color: $neon-carrot;
}
.gray {
  background-color: lighten( $primary, 77% );
}
.has-data > td:first-child {
  text-decoration: underline;
  &:hover {
    color: $red;
  }
}
</style>
