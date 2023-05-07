<template>
  <div class="computer-form">
    <base-label title="Введите название CPU">
      <base-input v-model="cpu" placeholder="Название CPU" />
    </base-label>
    <base-label title="Введите название GPU">
      <base-input v-model="gpu" placeholder="Название GPU" />
    </base-label>
    <base-label title="Объем ОЗУ">
      <base-input
        v-model="ramSize"
        placeholder="Введите объем ОЗУ"
        type="number"
      />
    </base-label>
    <base-label title="Объем накопителя">
      <base-input
        v-model="storageSize"
        placeholder="Введите объем накопителя"
        type="number"
      />
    </base-label>
  </div>
</template>

<script lang="ts" setup>
import { BaseInput } from "@/components/ui/base-input";
import { computed } from "vue";
import ComputerFormModel from "./models/ComputerFormModel";
import { BaseLabel } from "@/components/ui/base-label";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: ComputerFormModel): void;
}>();

const props = defineProps<{
  /** v-model для значений формы */
  modelValue: ComputerFormModel;
}>();

/** Значение поля формы cpu */
const cpu = computed({
  get() {
    return props.modelValue.cpu || "";
  },
  set(value) {
    emit(
      "update:modelValue",
      new ComputerFormModel({ ...props.modelValue, cpu: value })
    );
  },
});

/** Значение поля формы gpu */
const gpu = computed({
  get() {
    return props.modelValue.gpu || "";
  },
  set(value) {
    emit(
      "update:modelValue",
      new ComputerFormModel({ ...props.modelValue, gpu: value })
    );
  },
});

const ramSize = computed({
  get() {
    return props.modelValue.ramSize?.toString() || "";
  },
  set(value) {
    const numValue = Number(value);
    if (!isNaN(numValue))
      emit(
        "update:modelValue",
        new ComputerFormModel({ ...props.modelValue, ramSize: numValue })
      );
  },
});
const storageSize = computed({
  get() {
    return props.modelValue.storageSize?.toString() || "";
  },
  set(value) {
    const numValue = Number(value);
    if (!isNaN(numValue))
      emit(
        "update:modelValue",
        new ComputerFormModel({ ...props.modelValue, storageSize: numValue })
      );
  },
});
</script>

<style lang="less" scoped>
.computer-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
