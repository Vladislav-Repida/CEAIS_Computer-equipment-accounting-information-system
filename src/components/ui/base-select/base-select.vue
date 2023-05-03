<template>
  <div class="base-select" ref="$wrap">
    <div
      class="base-select__value"
      ref="$valueEl"
      :style="valueStyle"
      @click="ToggleOpen"
    >
      {{ modelValue.text || placeholder }}
      <span
        :class="[
          'base-select__chevron mdi mdi-chevron-down',
          { 'is-open': isOpen },
        ]"
      />
    </div>
    <div
      class="base-select__options-wrapper"
      :style="optionsStyle"
      v-if="isOpen"
    >
      <div
        :class="[
          'base-select__option',
          { 'is-select': option.id === modelValue.id },
        ]"
        v-for="option in options"
        :key="option.id"
        @click="SelectOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { BaseSelectOptionModel } from "./models";

const emit = defineEmits<{
  (eventName: "update:modelValue", value: BaseSelectOptionModel): void;
}>();

const props = defineProps<{
  /** Placeholder */
  placeholder?: string;
  /** Опции для выбора */
  options?: Array<BaseSelectOptionModel>;
  /** v-model выбранной опции */
  modelValue: BaseSelectOptionModel;

  /** Минимальная ширина */
  minWidth?: string;
  /** Максимальная ширина */
  maxWidth?: string;
}>();

const isOpen = ref(false);
const ToggleOpen = () => (isOpen.value = !isOpen.value);
const Close = () => (isOpen.value = false);

const $wrap = ref<HTMLElement>();

/** Ссылка на элемент вывода выбранного значения */
const $valueEl = ref<HTMLElement>();
/** DOMRect элемента вывода выбранного значения */
const valueElRect = ref<DOMRect>();

/** Стили для элемента вывода выбранного значения */
const valueStyle = computed(() => {
  return {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
  };
});

/** Стили для блока опций */
const optionsStyle = computed(() => {
  return {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    top: `${valueElRect.value?.bottom + valueElRect.value?.height}px`,
    left: `${valueElRect.value?.right - valueElRect.value?.width / 2}px`,
  };
});

/** Выбираем опцию */
const SelectOption = (option: BaseSelectOptionModel) => {
  emit("update:modelValue", new BaseSelectOptionModel({ ...option }));
  Close();
};

/** Функция обработчик изменения размера */
const ResizeObserveHandler = (entryes: Array<ResizeObserverEntry>) => {
  const rect = entryes[0].contentRect;
  if (rect) valueElRect.value = rect;
};

/** Обсервер для ослеживания изменения размера элемента */
const resizeObserver = new ResizeObserver(ResizeObserveHandler);

const ClickOutside = (e: MouseEvent) => {
  if (!$wrap.value?.contains(e.target as HTMLElement)) Close();
};

onMounted(() => {
  if ($valueEl.value) {
    valueElRect.value = $valueEl.value.getBoundingClientRect();
    resizeObserver.observe($valueEl.value);
  }
  window.addEventListener("click", ClickOutside);
});

onUnmounted(() => {
  resizeObserver.disconnect();
  window.removeEventListener("click", ClickOutside);
});
</script>

<style lang="less" scoped>
.base-select {
  position: relative;

  &__options-wrapper {
    position: absolute;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgba(229, 228, 245, 1);
    border: solid 1px #e6e5ee;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  &__option {
    font-size: 16px;
    color: #514e63;
    padding: 10px;
    cursor: pointer;
    &.is-select,
    &:hover {
      background-color: #eef1fc;
    }
  }
  &__value {
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

    cursor: pointer;
  }
  &__chevron {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    pointer-events: none;

    transition: transform 0.2s ease;

    &.is-open {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}
</style>
