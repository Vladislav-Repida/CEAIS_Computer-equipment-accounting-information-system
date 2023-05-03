import { EnumTypeOfEquipment } from "../enums";

/** Модель для описания компьютерной техники */
export default class EquipmentModel {
  /** Идентификатор */
  id: string;
  /** Тип техники */
  type: EnumTypeOfEquipment = EnumTypeOfEquipment.Computer;
  /** Наименование */
  name: string;
  /** Описание */
  desc?: string;

  constructor(obj?: Partial<EquipmentModel>) {
    Object.assign(this, obj);
  }
}
