export default class MonitorFormModel {
  /** Разрешение монитора в формате "ширина x высота" */
  resolution: string;
  /** Диагональ экрана в дюймах */
  screenSize: number;
  /** Частота обновления экрана в Гц */
  refreshRate: number;

  constructor(obj?: Partial<MonitorFormModel>) {
    Object.assign(this, obj);
  }
}
