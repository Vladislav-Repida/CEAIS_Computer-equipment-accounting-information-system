<template>
  <form-wrap>
    <base-label title="Введите наименование компьютерной техники">
      <base-input type="text" v-model="name" placeholder="Введите название" />
    </base-label>
    <base-label title="Введите описание компьютерной техники">
      <base-textarea
        v-model="desc"
        placeholder="Введите описание"
        height="120px"
      />
    </base-label>
    <base-label
      title="Выберите тип компьютерной техники"
      v-if="!isDisabledSelectType"
    >
      <base-select :options="options" v-model="option" />
    </base-label>
  </form-wrap>
</template>

<script lang="ts" setup>
import EquipmentModel from "@/app/mappers/models/EquipmentModel";
import { computed, ref } from "vue";
import BaseEquipmentFormModel from "./models/BaseEquipmentFormModel";
import { BaseSelect, BaseSelectOptionModel } from "@/components/ui/base-select";
import { BaseLabel } from "@/components/ui/base-label";
import { FormWrap } from "@/components/ui/form-wrap";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: BaseEquipmentFormModel): void;
}>();

const props = defineProps<{
  /** v-model для формы компьютерной техники */
  modelValue: BaseEquipmentFormModel;

  isDisabledSelectType?: boolean;
}>();

const options = [
  new BaseSelectOptionModel({
    id: 0,
    text: "Компьютер",
  }),
  new BaseSelectOptionModel({
    id: 1,
    text: "Монитор",
  }),
];

const option = computed({
  get() {
    return options.find((option) => option.id === props.modelValue.type);
  },
  set(value) {
    emit(
      "update:modelValue",
      new BaseEquipmentFormModel({ ...props.modelValue, type: value.id })
    );
  },
});

/** Значение поля названия компьютерной техники */
const name = computed({
  get() {
    return props.modelValue.name ?? "";
  },
  set(value) {
    emit(
      "update:modelValue",
      new BaseEquipmentFormModel({ ...props.modelValue, name: value })
    );
  },
});

/** Значение поля описания компьютерной техники */
const desc = computed({
  get() {
    return props.modelValue.desc ?? "";
  },
  set(value) {
    emit(
      "update:modelValue",
      new BaseEquipmentFormModel({ ...props.modelValue, desc: value })
    );
  },
});
</script>

<style lang="less" scoped>
.base-tech-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
