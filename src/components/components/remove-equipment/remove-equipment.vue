<template>
  <div class="remove-equipment">
    <base-button @click="OpenModal">Удалить</base-button>
    <base-modal
      :active="visibleModal"
      @close="CloseModal"
      :title="`Удалить ${equipment.name}`"
    >
      <div class="button-wrapper">
        <base-button @click="Remove">Удалить</base-button>
        <base-button @click="CloseModal">Отмена</base-button>
      </div>
    </base-modal>
  </div>
</template>

<script lang="ts" setup>
import { EquipmentModel } from "@/app/mappers/models";
import { useAppStore } from "@/app/stores/appStore";
import { BaseButton, BaseModal } from "@/components/ui";
import { ref } from "vue";

const props = defineProps<{
  /** Техника для удаления */
  equipment: EquipmentModel;
}>();

const appStore = useAppStore();

const { RemoveEquipment } = appStore;

/** Видимость модалки */
const visibleModal = ref(false);

/** Открыть модалку */
const OpenModal = () => (visibleModal.value = true);

/** Закрыть модалку */
const CloseModal = () => (visibleModal.value = false);

/** Удаляем */
const Remove = () => {
  RemoveEquipment(props.equipment.id);
  CloseModal();
};
</script>

<style lang="less" scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
