<template>
  <div class="add-equipment">
    <base-button @click="OpenModal">Добавить технику</base-button>
    <base-modal
      :active="visibleModal"
      title="Добавить технику"
      @close="CloseModal"
    >
      <div class="add-equipment__form">
        <base-equipment-form v-model="equipmentData" />
        <computer-form v-model="computerData" v-if="isComputer" />
        <monitor-form v-model="monitorData" v-else-if="isMonitor" />
        <base-button @click="HandlerButtonCreate">Добавить</base-button>
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

/** Видимость модалки */
const visibleModal = ref(false);

/** Открываем модалку */
const OpenModal = () => (visibleModal.value = true);
/** Закрываем модалку */
const CloseModal = () => (visibleModal.value = false);

/** Данные для общей формы "техники" */
const equipmentData = ref(new BaseEquipmentFormModel());
/** Данные для формы "компьютера" */
const computerData = ref(new ComputerFormModel());
/** Данные для формы "монитора" */
const monitorData = ref(new MonitorFormModel());

/** Очищаем дополнительные формы */
const ClearAdditionalForms = () => {
  // Очищаем данные формы "компьютера"
  computerData.value = new ComputerFormModel();
  // Очищаем данные формы "монитора"
  monitorData.value = new MonitorFormModel();
};

/** Очищаем все формы */
const ClearAllForms = () => {
  // Очищаем общую форму
  equipmentData.value = new BaseEquipmentFormModel();
  // Очищаем дополнительные формы
  ClearAdditionalForms();
};

/** Является ли техника компьютером */
const isComputer = computed(
  () => equipmentData.value.type === EnumTypeOfEquipment.Computer
);
/** Является ли техника монитором */
const isMonitor = computed(
  () => equipmentData.value.type === EnumTypeOfEquipment.Monitor
);

/** Следем за типом общей формы, если изменяется очищаем дополнительные формы */
watch(
  () => equipmentData.value.type,
  () => ClearAdditionalForms()
);

/**
 * Создаем технику
 */
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

/** Обработчик кнопки создание  */
const HandlerButtonCreate = () => {
  // Создаем технику
  const equipment = CreateEquipment();
  // Если есть хоть 1 не заполненное поле выводим предупреждение
  if (
    !equipment ||
    Object.entries(equipment).find(([key, value]) => value === undefined)
  ) {
    alert("Все поля обязательные");
    return;
  }
  // Очищаем все формы
  ClearAllForms();
  // Добавляем форму в хранилище
  AddEquipment(equipment);
};
</script>

<style lang="less" scoped>
.add-equipment__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
