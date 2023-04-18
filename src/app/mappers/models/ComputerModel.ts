export default class ComputerModel {
  /** Модель */
  model: string;
  /** Серийный номер */
  serialNumber: string;
  /** Описание */
  description?: string;
  /** Стоимость */
  cost: number;

  constructor(model: string, serialNumber: string, cost: number) {
    this.model = model;
    this.serialNumber = serialNumber;
    this.cost = cost;
  }
}
