import { defineStore } from "pinia";
import { Equipment } from "../mappers/types";
import { LcReactiveArray } from "../services/localStorageReactive";

export const useAppStore = defineStore("app", () => {
  /** Где храним технику */
  const equipments = LcReactiveArray<Array<Equipment>>("equipments");

  /** Добавляем технику */
  const AddEquipment = (value: Equipment) =>
    (equipments.value = [value, ...equipments.value]);

  /** Обновляем технику */
  const EditEquipment = (value: Equipment) => {
    // Находим по id
    const find = equipments.value.find((eqp) => eqp.id === value.id);
    // Обновялем новыми значениями
    Object.assign(find, value);
  };

  /** Удаляем технику */
  const RemoveEquipment = (equipmentId: string) =>
    // Фильтруем по id
    (equipments.value = equipments.value.filter(
      (equipment) => equipment.id !== equipmentId
    ));

  return {
    equipments,
    AddEquipment,
    EditEquipment,
    RemoveEquipment,
  };
});
