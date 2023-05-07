<template>
  <div class="view-equipments">
    <transition-group name="list">
      <view-base
        :value="equipment"
        v-for="equipment in equipments"
        :key="equipment.id"
      >
        <view-equipment :equipment="equipment" />
      </view-base>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/app/stores/appStore";

import { ViewBase, ViewEquipment } from ".";

const appStore = useAppStore();
const { equipments } = storeToRefs(appStore);
</script>

<style lang="less" scoped>
.view-equipments {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
