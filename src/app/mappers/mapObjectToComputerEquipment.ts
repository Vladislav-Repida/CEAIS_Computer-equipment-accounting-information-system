import { ComputerModel } from "./models";

const mapObjectToComputerEquipment = (obj: Object) => {
  if (!obj.hasOwnProperty("type")) return;
  mapComputer(obj as { type: string });
};

const mapComputer = <T extends { type: string }>(obj: T) => {
  switch (obj.type) {
    case "computer":
      return new ComputerModel({
        ...obj,
      });
  }
};

export default mapObjectToComputerEquipment;
