<template>
  <div class="list-item-default">
    <div class="list-item-default__header">
      <h2 class="list-item-default__title">{{ title }}</h2>
    </div>
    <div class="list-item-default__main">
      <p class="list-item-default__desc" v-if="desc">{{ desc }}</p>
    </div>
    <div class="list-item-default__footer">
      <div class="list-item-default__price">
        <div class="list-item-default__subtitle">Стоимость за 1ед:</div>
        {{ price }} $
      </div>
      <div class="list-item-default__counter">
        <div class="list-item-default__subtitle">Количество:</div>
        <base-counter v-model="countValue" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { BaseCounter } from "@/components/ui/base-counter";

const emit = defineEmits<{
  (eventName: "update:title", value: string): void;
  (eventName: "update:desc", value: string): void;
  (eventName: "update:count", value: number): void;
  (eventName: "update:price", value: number): void;
}>();

const props = defineProps<{
  title: string;
  desc?: string;
  count?: number;
  price?: number;
}>();

const titleValue = computed({
  get() {
    return props.title;
  },
  set(value) {
    emit("update:title", value);
  },
});

const descValue = computed({
  get() {
    return props.desc;
  },
  set(value) {
    emit("update:desc", value);
  },
});

const countValue = computed({
  get() {
    return props.count;
  },
  set(value) {
    emit("update:count", value);
  },
});

const priceValue = computed({
  get() {
    return props.price;
  },
  set(value) {
    emit("update:price", value);
  },
});
</script>

<style lang="less" scoped>
.list-item-default {
  padding: 20px 30px;
  margin: 20px 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 5px rgba(190, 202, 211, 0.31);

  &__title {
    font-size: 22px;
    font-weight: 600;
    color: #313747;
  }
  &__subtitle {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #313747;
  }
  &__header {
    margin-bottom: 10px;
  }
  &__main {
    margin-bottom: 20px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__counter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__price {
    font-size: 16px;
  }
}
</style>
