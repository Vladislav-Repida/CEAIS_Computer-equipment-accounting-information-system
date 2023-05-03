<template>
  <div class="list-item-equipment-generic">
    <component :is="componentData.component" v-bind="componentData.bindValue" />
  </div>
</template>

<script lang="ts" setup>
import EquipmentModel from "@/app/mappers/models/EquipmentModel";
import { computed } from "vue";
import ListItemComputer from "./list-item-computer.vue";

const props = defineProps<{
  item: EquipmentModel;
}>();

const componentData = computed(() => {
  switch (props.item.type) {
    case "computer":
      return {
        component: ListItemComputer,
        bindValue: {
          title: props.item.name,
          desc: props.item.desc,
          price: props.item.price,
          count: 5,
        },
      };
  }
});
</script>

<style lang="less" scoped></style>
