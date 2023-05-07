import { defineStore } from "pinia";
import { ref } from "vue";
import { Equipment } from "../mappers/types";
import { LocalStorageService } from "../services";

export const useAppStore = defineStore("app", () => {
  const lc = new LocalStorageService<Array<Equipment>>("equipments");

  const equipments = ref(lc.GetAll() || new Array<Equipment>());

  const UpdateLocalStorage = () => {
    lc.WriteAll(equipments.value);
  };

  const AddEquipment = (value: Equipment) => {
    equipments.value = [value, ...equipments.value];
    UpdateLocalStorage();
  };

  const EditEquipment = (value: Equipment) => {
    const find = equipments.value.find((eqp) => eqp.id === value.id);
    Object.assign(find, value);
    UpdateLocalStorage();
  };

  const RemoveEquipment = (equipmentId: string) => {
    equipments.value = equipments.value.filter(
      (equipment) => equipment.id !== equipmentId
    );
    UpdateLocalStorage();
  };

  return {
    equipments,
    AddEquipment,
    EditEquipment,
    RemoveEquipment,
  };
});
