<template>
  <div class="view-equipments">
    <view-base
      :value="equipment"
      v-for="equipment in equipments"
      :key="equipment.id"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/app/stores/appStore";

import { ViewBase } from ".";

const appStore = useAppStore();
const { equipments } = storeToRefs(appStore);
</script>

<style lang="less" scoped>
.view-equipments {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
