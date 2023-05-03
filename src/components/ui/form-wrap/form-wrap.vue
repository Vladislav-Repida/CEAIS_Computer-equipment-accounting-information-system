<template>
  <div class="form-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
