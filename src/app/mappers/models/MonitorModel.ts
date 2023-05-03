import EquipmentModel from "./EquipmentModel";

/** Класс для описания монитора */
export default class MonitorModel extends EquipmentModel {
  /** Разрешение монитора в формате "ширина x высота" */
  resolution: string;
  /** Диагональ экрана в дюймах */
  screenSize: number;
  /** Частота обновления экрана в Гц */
  refreshRate: number;

  constructor(obj?: Partial<MonitorModel>) {
    super(obj);
    Object.assign(this, obj);
  }
}
