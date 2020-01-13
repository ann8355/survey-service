<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(item,idx) in titles" :key="idx">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr><td :colspan="titles.length">無任何問卷資料</td></tr>
        <!-- <tr v-for="(item,index) in list" :key="index">
          <td @click="openModal(item)">{{ formatString(item.count) }}</td>
          <td @click="openModal(item)">{{ item.total }}</td>
          <td class="center">
            <wpt-button class="yellow btn tableBtn" @click="arriveCheck(item)">
              {{$t('common.off')}}
            </wpt-button>
            <wpt-button class="gray btn tableBtn" @click="cancelCheck(item)">
              {{$t('common.cancel')}}
            </wpt-button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import Modal from '@/components/ConfirmModal';

export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
    },
    titles: {
      type: Array,
    },
  },
  data() {
    return {
    };
  },
  components: {
    Modal,
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/base";

.table {
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
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
        height: 12vw;
        font-size: $h4;
        color: lighten( $primary, 30% );
        border-right: 1px solid lighten( $primary, 80% );
        border-top: 1px solid lighten( $primary, 80% );
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
</style>
