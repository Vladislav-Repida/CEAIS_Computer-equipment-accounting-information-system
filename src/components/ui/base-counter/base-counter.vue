<template>
  <div class="base-counter">
    <button class="base-counter__button" @click="Add">-</button>
    <span class="base-counter__value">{{ value }}</span>
    <button class="base-counter__button" @click="Remove">+</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: number): void;
}>();

const props = defineProps<{
  modelValue: number;
  min?: number;
  max?: number;
}>();

const innerValue = ref(0);

const value = computed({
  get() {
    return props.modelValue || innerValue.value;
  },
  set(value) {
    innerValue.value = value;
    emit("update:modelValue", value);
  },
});
const Add = () => {
  const accessMax = props.max === undefined || value.value + 1 <= props.max;
  if (accessMax) value.value++;
};
const Remove = () => {
  const accessMin = props.min === undefined || value.value - 1 >= props.min;
  if (accessMin) value.value--;
};
</script>

<style lang="less" scoped>
.base-counter {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: #dfe6ff;
  padding: 2px;
  border-radius: 2px;
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: normal;

    border: none;
    font-size: 19px;

    width: 30px;
    height: 30px;

    background-color: #4769ff;
    color: #fff;
    border-radius: 3px;

    cursor: pointer;
  }
}
</style>
