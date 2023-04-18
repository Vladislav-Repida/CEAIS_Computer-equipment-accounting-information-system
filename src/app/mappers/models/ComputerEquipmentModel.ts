/** Модель для описания компьютерной техники */
export default class ComputerEquipmentModel {
  /** Идентификатор */
  id: string;
  /** Тип техники */
  type: string;
  /** Наименование */
  name: string;
  /** Описание */
  desc?: string;

  /** Стоимость */
  price: number;

  constructor(obj?: Partial<ComputerEquipmentModel>) {
    Object.assign(this, obj);
  }
}
