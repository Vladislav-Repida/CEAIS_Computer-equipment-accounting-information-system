<template>
  <base-layout>
    <AddTechnic />
    <ListEquipment />
    <ViewEquipment />
  </base-layout>
</template>

<script setup lang="ts">
import { BaseButton } from "./components/ui";
import { AddTechnic } from "./components/components";
import { ListEquipment } from "./components/components";
import { ViewEquipment } from "./components/components/view-equipment/ui";
</script>

<style lang="less"></style>
