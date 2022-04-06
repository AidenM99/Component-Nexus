import uniqid from "uniqid";
import CorsairVengeance from "../../assets/images/corsair-vengeance.jpg";
import KingstonHyperXFury from "../../assets/images/kingston-hyperX-fury.jpg";
import NightHawk from "../../assets/images/t-force-night-hawk.jpg";
import EvoSpear from "../../assets/images/geil-evo-spear.jpg";

const ram = [
  {
    id: uniqid(),
    category: "ram",
    name: "Corsair Vengeance LPX 16GB",
    description:
      "Corsair Vengeance LPX 16 GB (1 x 16 GB) DDR4-3000 CL16 Memory",
    price: "£35.00",
    image: CorsairVengeance,
  },
  {
    id: uniqid(),
    category: "ram",
    name: "Kingston HyperX Fury 16GB",
    description: "Kingston HyperX Fury 16 GB (2 x 8 GB) DDR4-2666 CL16 Memory",
    price: "£83.67",
    image: KingstonHyperXFury,
  },
  {
    id: uniqid(),
    category: "ram",
    name: "Team T-Force Night Hawk RGB 16 GB",
    description:
      "Team T-Force Night Hawk RGB 16 GB (2 x 8 GB) DDR4-3600 CL18 Memory",
    price: "£75.00",
    image: NightHawk,
  },
  {
    id: uniqid(),
    category: "ram",
    name: "GeIL EVO SPEAR Phantom Gaming 16 GB",
    description:
      "GeIL EVO SPEAR Phantom Gaming 16 GB (2 x 8 GB) DDR4-3000 CL16 Memory",
    price: "£77.42",
    image: EvoSpear,
  },
];

export default ram;
