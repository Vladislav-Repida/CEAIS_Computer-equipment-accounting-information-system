import { defineStore } from "pinia";
import EquipmentModel from "../mappers/models/EquipmentModel";
import { ref } from "vue";
import { ComputerModel } from "../mappers/models";
import MonitorModel from "../mappers/models/MonitorModel";

type Equipment = ComputerModel | MonitorModel;

export const useAppStore = defineStore("app", () => {
  const equipments = ref(
    new Array<Equipment>(
      new ComputerModel({
        id: "1e9776e5-cacd-47b8-8ff5-491080c80256",
        type: 0,
        name: "HP Pavilion Gaming Desktop TG01-1549nw",
        desc: "HP Pavilion Gaming Desktop TG01-1549nw PC (4R0D6EA) AMD Ryzen 5 4600G/16Gb*SSD 512Gb/RTX 3060 12Gb/400W",
        cpu: "AMD Ryzen 5 4600G",
        gpu: "RTX 3060 12Gb",
      }),
      new ComputerModel({
        id: "765d9679-06fc-4792-a400-40860722cc4e",
        type: 0,
        name: "Компьютер OPTIMUS (E-Sport GB460T-CR7)",
        desc: "Компьютер OPTIMUS (E-Sport GB460T-CR7) i5-10400F/16GB*1TB SSD M2/GTX1660S*6Gb/3*DP+1*HDMI, GLan2.5, W10",
        cpu: "i5-10400F",
        gpu: "GTX1660S",
      }),
      new ComputerModel({
        id: "05375a55-ae8e-4740-93aa-1222689b2554",
        type: 0,
        name: "HP Pavilion Gaming Desktop TG01-2409nw",
        desc: "HP Pavilion Gaming Desktop TG01-2409nw PC (4R0D8EA) Intel Core i5-11400F/16Gb*SSD 512Gb/RTX 3060 12Gb/400W",
        cpu: " Intel Core i5-11400F",
        gpu: "RTX 3060",
      }),
      new ComputerModel({
        id: "05375a55-ae8e-4740-93aa-122223689b2554",
        type: 0,
        name: "HP Pavilion Gaming Desktop TG01-2409nw",
        desc: "HP Pavilion Gaming Desktop TG01-2409nw PC (4R0D8EA) Intel Core i5-11400F/16Gb*SSD 512Gb/RTX 3060 12Gb/400W",
        cpu: " Intel Core i5-11400F",
        gpu: "RTX 3060",
      })
    )
  );

  const AddEquipment = (value: Equipment) => {
    equipments.value.push(value);
  };

  return {
    equipments,
    AddEquipment,
  };
});
