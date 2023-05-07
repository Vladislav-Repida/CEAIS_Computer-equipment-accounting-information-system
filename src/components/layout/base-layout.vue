<template>
  <div class="base-layout">
    <header class="base-layout__header">
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.base-layout {
  max-width: 1200px;
  padding: 0 20px;
  min-height: 100vh;
  margin: 0 auto;

  &__header {
    margin: 20px 0;
  }
}
</style>
