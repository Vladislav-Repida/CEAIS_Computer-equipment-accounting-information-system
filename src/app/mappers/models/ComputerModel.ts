import ComputerEquipmentModel from "./ComputerEquipmentModel";

export default class ComputerModel extends ComputerEquipmentModel {
  type: string = "computer";
  constructor(obj?: Partial<ComputerModel>) {
    super(obj);
    Object.assign(this, obj);
  }
}
