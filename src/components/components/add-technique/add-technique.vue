<template>
  <div class="add-technique">
    <base-button @click="ToggleVisible">Добавить технику</base-button>
    <base-modal
      :active="visibleModal"
      title="Добавить технику"
      @close="ToggleVisible"
    >
      <base-input type="text" v-model="name" placeholder="Введите название" />
    </base-modal>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton, BaseModal, BaseInput } from "@/components/ui";
import { ref } from "vue";
const name = ref("");

const visibleModal = ref(false);

const ToggleVisible = () => (visibleModal.value = !visibleModal.value);
</script>

<style lang="less" scoped></style>
