<template>
  <div class="view-base">
    <h2 class="view-base__title">{{ value.name }}</h2>
    <p class="view-base__desc" v-if="value.desc">{{ value.desc }}</p>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EquipmentModel from "@/app/mappers/models/EquipmentModel";

const props = defineProps<{
  value: EquipmentModel;
}>();
</script>

<style lang="less" scoped>
.view-base {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  box-shadow: 0 0 16px 0 rgba(143, 143, 191, 0.2);
  padding: 10px 20px;
  border-radius: 5px;
  width: 300px;
  &__title {
    font-size: 18px;
    color: #151515;
  }
  &__desc {
    font-size: 15px;
  }
}
</style>
