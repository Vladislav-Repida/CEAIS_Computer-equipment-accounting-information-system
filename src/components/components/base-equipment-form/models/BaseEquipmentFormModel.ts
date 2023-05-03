import { EnumTypeOfEquipment } from "@/app/mappers/enums";

/** Класс для описания формы компьютерной техники */
export default class BaseEquipmentFormModel {
  /** Тип техники */
  type: EnumTypeOfEquipment = EnumTypeOfEquipment.Computer;
  /** Наименование */
  name: string;
  /** Описание */
  desc?: string;

  constructor(obj?: Partial<BaseEquipmentFormModel>) {
    Object.assign(this, obj);
  }
}
