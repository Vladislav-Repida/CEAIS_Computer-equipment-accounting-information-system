/** Класс для описания полей формы компьютера */
export default class ComputerFormModel {
  /** Модель процессора */
  cpu: string;
  /** Модель графического процессора */
  gpu: string;
  /** Объем оперативной памяти в Гб */
  ramSize: number;
  /** Объем хранения в Гб */
  storageSize: number;

  constructor(obj?: Partial<ComputerFormModel>) {
    Object.assign(this, obj);
  }
}
