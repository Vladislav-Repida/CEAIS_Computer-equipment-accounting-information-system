import { ComputerModel, EquipmentModel, MonitorModel } from "../models";

/** Все виды компьютерной техники (для типов) */
export type Equipment = EquipmentModel | ComputerModel | MonitorModel;
