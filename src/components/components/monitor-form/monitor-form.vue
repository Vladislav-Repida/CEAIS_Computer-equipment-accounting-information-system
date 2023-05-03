<template>
  <form-wrap>
    <base-label title="Разрешение монитора в формате ширина x высота">
      <base-input
        v-model="resolution"
        placeholder="Введите разрешение монитора"
      />
    </base-label>
    <base-label title="Диагональ экрана в дюймах">
      <base-input v-model="screenSize" placeholder="Введите диагональ экрана" />
    </base-label>
    <base-label title="Частота обновления экрана в Гц">
      <base-input
        v-model="rerefreshRate"
        placeholder="Введите частоту обновления экрана"
      />
    </base-label>
  </form-wrap>
</template>

<script lang="ts" setup>
import { FormWrap, BaseLabel, BaseInput } from "@/components/ui";
import { MonitorFormModel } from "./models";
import { computed } from "vue";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: MonitorFormModel): void;
}>();

const props = defineProps<{
  modelValue: MonitorFormModel;
}>();

const resolution = computed({
  get() {
    return props.modelValue.resolution || "";
  },
  set(value) {
    emit(
      "update:modelValue",
      new MonitorFormModel({ ...props.modelValue, resolution: value })
    );
  },
});

const screenSize = computed({
  get() {
    return props.modelValue.screenSize?.toString() || "";
  },
  set(value) {
    const numValue = Number(value);
    if (!isNaN(numValue))
      emit(
        "update:modelValue",
        new MonitorFormModel({ ...props.modelValue, screenSize: numValue })
      );
  },
});

const rerefreshRate = computed({
  get() {
    return props.modelValue.refreshRate?.toString() || "";
  },
  set(value) {
    const numValue = Number(value);
    if (!isNaN(numValue))
      emit(
        "update:modelValue",
        new MonitorFormModel({ ...props.modelValue, refreshRate: numValue })
      );
  },
});
</script>

<style lang="less" scoped></style>
