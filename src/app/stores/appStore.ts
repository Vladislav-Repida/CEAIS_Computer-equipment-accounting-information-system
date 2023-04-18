import { defineStore } from "pinia";
import ComputerEquipmentModel from "../mappers/models/ComputerEquipmentModel";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const technic = ref(new Array<ComputerEquipmentModel>());

  const AddTechnic = (value: ComputerEquipmentModel) => {
    technic.value.push(value);
  };

  return {
    technic,
  };
});
