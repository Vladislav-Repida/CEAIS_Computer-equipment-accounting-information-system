<template>
  <div class="view-equipment">
    <table-description :items="tableItems" />
  </div>
</template>

<script lang="ts" setup>
import { Equipment } from "@/app/mappers/types";
import { computed } from "vue";

import { TableDescription } from "@/components/ui/table-description";
import { EnumTypeOfEquipment } from "@/app/mappers/enums";
import { ComputerModel, MonitorModel } from "@/app/mappers/models";
import { TableDescriptionItemModel } from "@/components/ui/table-description/models";

const props = defineProps<{
  equipment: Equipment;
}>();

const tableItems = computed(() => {
  const { type } = props.equipment;
  if (type === EnumTypeOfEquipment.Computer) {
    const equipment = props.equipment as ComputerModel;
    return [
      new TableDescriptionItemModel({
        title: "Процессор",
        value: equipment.cpu,
      }),
      new TableDescriptionItemModel({
        title: "Видеокарта",
        value: equipment.gpu,
      }),
      new TableDescriptionItemModel({
        title: "Объем ОЗУ",
        value: `${equipment.ramSize} Гб`,
      }),
      new TableDescriptionItemModel({
        title: "Объем хранилища",
        value: `${equipment.storageSize} Тб`,
      }),
    ];
  }
  if (type === EnumTypeOfEquipment.Monitor) {
    const equipment = props.equipment as MonitorModel;
    return [
      new TableDescriptionItemModel({
        title: "Разрешение экрана",
        value: equipment.resolution,
      }),
      new TableDescriptionItemModel({
        title: "Диагональ экрана (в дюймах)",
        value: equipment.screenSize.toString(),
      }),
      new TableDescriptionItemModel({
        title: "Частота обновления (Гц)",
        value: equipment.refreshRate.toString(),
      }),
    ];
  }
});
</script>

<style lang="less" scoped></style>
