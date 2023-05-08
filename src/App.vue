<template>
  <base-layout>
    <template #header>
      <h1 class="title">
        Информационная система учета компьютерной техники (CEAIS)
      </h1>
      <AddTechnic />
    </template>
    <ViewEquipments />
  </base-layout>
</template>

<script setup lang="ts">
import { AddTechnic } from "./components/components/add-equipment";
import { ViewEquipments } from "./components/components/view-equipments/ui";
import { BaseLayout } from "./components/layout";
</script>

<style lang="less">
.title {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
}
</style>
