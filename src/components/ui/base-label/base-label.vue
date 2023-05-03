<template>
  <label class="base-label">
    <span class="base-label__title">{{ title }}</span>
    <slot></slot>
  </label>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style lang="less" scoped>
.base-label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  &__title {
    font-weight: 500;
    font-size: 15px;
    color: #494949;
  }
}
</style>
