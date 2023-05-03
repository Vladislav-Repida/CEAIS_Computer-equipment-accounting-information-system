<template>
  <textarea
    class="base-textarea"
    v-model="value"
    :placeholder="placeholder"
    :style="style"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: string): void;
}>();

const props = defineProps<{
  resize?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  modelValue: string;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const style = computed(() => {
  return {
    resize: props.resize ? "both" : "none",
    width: props.width,
    height: props.height,
  };
});
</script>

<style lang="less" scoped>
.base-textarea {
  display: block;
  padding: 12px 16px;
  border: none;
  outline: none;

  width: 100%;
  border-radius: 5px;
  background-color: #f5f7ff;
  color: #252525;
  border: solid 1px #e6eaf5;

  font-size: 15px;

  &::placeholder {
    color: #bbbbbb;
  }
}
</style>
