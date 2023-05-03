<template>
  <div class="list-equipment">
    <list-item-equipment-generic v-for="item in technic" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/app/stores/appStore";
import { ListItemDefault } from "./list-equipment-items";
import { storeToRefs } from "pinia";
import { ListItemEquipmentGeneric } from "./list-equipment-items";
const { technic } = storeToRefs(useAppStore());
</script>

<style lang="less" scoped></style>
