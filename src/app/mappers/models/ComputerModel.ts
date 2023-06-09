import EquipmentModel from "./EquipmentModel";

/** Класс для описания системного блока */
export default class ComputerModel extends EquipmentModel {
  /** Модель процессора */
  cpu: string;
  /** Модель графического процессора */
  gpu: string;
  /** Объем оперативной памяти в Гб */
  ramSize: number;
  /** Объем хранения в Гб */
  storageSize: number;

  constructor(obj?: Partial<ComputerModel>) {
    super(obj);
    Object.assign(this, obj);
  }
}
