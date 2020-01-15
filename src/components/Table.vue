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
    <Modal :delId="delId" :ref="'deleteModal'" />
  </div>
</template>

<script>
import Modal from '@/components/DeleteModal';

export default {
  name: 'Table',
  props: {
    titles: {
      type: Array,
    },
  },
  data() {
    return {
      delId: '',
    };
  },
  components: {
    Modal,
  },
  methods: {
    clicks(name, item) {
      if (name === 'edit') {
        this.$router.push(`/${item}`);
      } else if (name === 'delete') {
        this.delId = item;
        this.$refs.deleteModal.show();
      }
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
        background-color: darken( $white, 2% );
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
