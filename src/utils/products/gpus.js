import uniqid from "uniqid";
import RTX3090 from "../../assets/images/rtx-3090.jpg";
import RTX3080 from "../../assets/images/rtx-3080.jpg";
import RTX3070 from "../../assets/images/rtx-3070.jpg";
import RTX3060 from "../../assets/images/rtx-3060.jpg";

const gpus = [
  {
    id: uniqid(),
    category: "gpus",
    name: "EVGA GeForce RTX 3090",
    description: "EVGA GeForce RTX 3090",
    price: "£1,857.00",
    image: RTX3090,
  },
  {
    id: uniqid(),
    category: "gpus",
    name: "EVGA GeForce RTX 3080 Ti",
    description: "EVGA GeForce RTX 3080 Ti",
    price: "£1,356.00",
    image: RTX3080,
  },
  {
    id: uniqid(),
    category: "gpus",
    name: "EVGA GeForce RTX 3070 Ti",
    description: "EVGA GeForce RTX 3070 Ti",
    price: "£753.50",
    image: RTX3070,
  },
  {
    id: uniqid(),
    category: "gpus",
    name: "EVGA GeForce RTX 3060",
    description: "EVGA GeForce RTX 3060",
    price: "£475.34",
    image: RTX3060,
  },
];

export default gpus;
