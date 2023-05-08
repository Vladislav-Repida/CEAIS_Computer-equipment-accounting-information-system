<template>
  <div class="edit-equipment">
    <base-button @click="OpenModal">Редактировать</base-button>
    <base-modal
      :active="visibleModal"
      :title="`Редактировать ${equipment.name}`"
      @close="CloseModal"
    >
      <base-equipment-form
        v-model="baseEquipmentModel"
        is-disabled-select-type
      />
      <monitor-form
        v-model="monitorData"
        v-if="equipment.type === EnumTypeOfEquipment.Monitor"
      />
      <computer-form
        v-model="computerData"
        v-else-if="equipment.type === EnumTypeOfEquipment.Computer"
      />
    </base-modal>
  </div>
</template>

<script lang="ts" setup>
import {
  ComputerModel,
  EquipmentModel,
  MonitorModel,
} from "@/app/mappers/models";
import { computed, ref } from "vue";
import { BaseEquipmentFormModel } from "../base-equipment-form";
import { useAppStore } from "@/app/stores/appStore";
import { BaseEquipmentForm } from "../base-equipment-form";

import { BaseButton, BaseModal } from "@/components/ui";
import { MonitorFormModel } from "../monitor-form";
import { ComputerFormModel } from "../computer-form";
import { EnumTypeOfEquipment } from "@/app/mappers/enums";

import { ComputerForm } from "../computer-form";

import { MonitorForm } from "../monitor-form";

const props = defineProps<{
  /** Техника для редактирования */
  equipment: EquipmentModel;
}>();

/** Видимость модалки */
const visibleModal = ref(false);
/** Закрыть модалку */
const CloseModal = () => (visibleModal.value = false);
/** Открыть модаку */
const OpenModal = () => (visibleModal.value = true);

const appStore = useAppStore();
const { EditEquipment } = appStore;

/** Моделька для базовой формы */
const baseEquipmentModel = computed({
  get() {
    return new BaseEquipmentFormModel({
      type: props.equipment.type,
      name: props.equipment.name,
      desc: props.equipment.desc,
    });
  },
  set(value) {
    // Редактируем технику в хранилище
    EditEquipment(new EquipmentModel({ ...props.equipment, ...value }));
  },
});

/** Моделька для формы монитора */
const monitorData = computed({
  get() {
    const monitor = props.equipment as MonitorModel;
    return new MonitorFormModel({
      screenSize: monitor.screenSize,
      refreshRate: monitor.refreshRate,
      resolution: monitor.resolution,
    });
  },
  set(value) {
    EditEquipment(new MonitorModel({ ...props.equipment, ...value }));
  },
});

/** Моделька для формы компьютера */
const computerData = computed({
  get() {
    const computer = props.equipment as ComputerModel;
    return new ComputerFormModel({
      cpu: computer.cpu,
      gpu: computer.gpu,
      ramSize: computer.ramSize,
      storageSize: computer.storageSize,
    });
  },
  set(value) {
    EditEquipment(new ComputerModel({ ...props.equipment, ...value }));
  },
});
</script>

<style lang="less" scoped></style>
