<template>
  <div class="add-equipment">
    <base-button @click="ToggleVisible">Добавить технику</base-button>
    <base-modal
      :active="visibleModal"
      title="Добавить технику"
      @close="ToggleVisible"
    >
      <div class="add-equipment__form">
        <base-equipment-form v-model="equipmentData" />
        <computer-form v-model="computerData" v-if="isComputer" />
        <monitor-form v-model="monitorData" v-else-if="isMonitor" />
        <base-button @click="Add">Добавить</base-button>
      </div>
    </base-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { EnumTypeOfEquipment } from "@/app/mappers/enums";
import { ComputerModel, MonitorModel } from "@/app/mappers/models";
import { useAppStore } from "@/app/stores/appStore";
import { uuid } from "@/utils";

import { BaseButton, BaseModal } from "@/components/ui";
import {
  ComputerForm,
  ComputerFormModel,
} from "@/components/components/computer-form";

import {
  BaseEquipmentFormModel,
  BaseEquipmentForm,
} from "@/components/components/base-equipment-form";
import { MonitorForm } from "@/components/components/monitor-form";
import { MonitorFormModel } from "@/components/components/monitor-form";

const appStore = useAppStore();
const { AddEquipment } = appStore;

const visibleModal = ref(false);

const ToggleVisible = () => (visibleModal.value = !visibleModal.value);

const computerData = ref(new ComputerFormModel());
const monitorData = ref(new MonitorFormModel());

const equipmentData = ref(new BaseEquipmentFormModel());

const ClearExtensionForms = () => {
  computerData.value = new ComputerFormModel();
  monitorData.value = new MonitorFormModel();
};

const ClearAllForms = () => {
  equipmentData.value = new BaseEquipmentFormModel();
  ClearExtensionForms();
};

const isComputer = computed(
  () => equipmentData.value.type === EnumTypeOfEquipment.Computer
);
const isMonitor = computed(
  () => equipmentData.value.type === EnumTypeOfEquipment.Monitor
);

watch(
  () => equipmentData.value.type,
  () => {
    ClearExtensionForms();
  }
);

const CreateEquipment = () => {
  if (isComputer.value) {
    return new ComputerModel({
      id: uuid(),
      type: EnumTypeOfEquipment.Computer,
      name: equipmentData.value.name,
      desc: equipmentData.value.desc,
      cpu: computerData.value.cpu,
      gpu: computerData.value.gpu,
      ramSize: computerData.value.ramSize,
      storageSize: computerData.value.storageSize,
    });
  } else if (isMonitor.value) {
    return new MonitorModel({
      id: uuid(),
      type: EnumTypeOfEquipment.Monitor,
      name: equipmentData.value.name,
      desc: equipmentData.value.desc,
      resolution: monitorData.value.resolution,
      refreshRate: monitorData.value.refreshRate,
      screenSize: monitorData.value.screenSize,
    });
  }
};

const Add = () => {
  const equipment = CreateEquipment();
  if (Object.entries(equipment).find(([key, value]) => value === undefined)) {
    alert("Все поля обязательные");
    return;
  }
  ClearAllForms();
  if (equipment) AddEquipment(equipment);
  console.log(equipmentData.value, computerData.value, monitorData.value);
};
</script>

<style lang="less" scoped>
.add-equipment__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
