import carRepo from "../public/Images/carRepo.svg";
import spd from "../public/Images/spd.svg";
import acc from "../public/Images/acc.svg";

export const strength = {
  RP: {
    Image: carRepo,
    unit: "Rep",
    number: "8.0",
    id: "1",
  },
  speed: {
    Image: spd,
    unit: "SPD",
    number: "8.0",
    id: "2",
  },
  acceleration: {
    Image: acc,
    unit: "ACC",
    number: "8.0",
    id: "3",
  },
  handling: {
    Image: acc,
    unit: "HND",
    number: "8.0",
    id: "4",
  },
  durability: {
    Image: acc,
    speed: "DUR",
    number: "8.0",
    id: "5",
  },
};
