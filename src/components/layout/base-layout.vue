<template>
  <div class="base-layout">
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
}
</style>
