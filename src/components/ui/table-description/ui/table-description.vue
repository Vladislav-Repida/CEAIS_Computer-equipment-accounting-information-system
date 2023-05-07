<template>
  <div class="table-description">
    <div class="table-description__item" v-for="item in items">
      <span class="table-description__item-title">{{ item.title }}</span>
      <span class="table-description__item-value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TableDescriptionItemModel } from "../models";

const props = defineProps<{
  items: Array<TableDescriptionItemModel>;
}>();
</script>

<style lang="less" scoped>
.table-description {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #ececec;
    }

    &-title {
      color: #333;
    }

    &-value {
      color: #999;
    }
  }
}
</style>
