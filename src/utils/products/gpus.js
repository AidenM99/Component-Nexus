import uniqid from "uniqid";
import RTX3090 from "../../assets/images/gpus/rtx-3090.jpg";
import RTX30902 from "../../assets/images/gpus/rtx-3090-2.jpg";
import RTX30903 from "../../assets/images/gpus/rtx-3090-3.jpg";
import RTX30904 from "../../assets/images/gpus/rtx-3090-4.jpg";
import RTX3080 from "../../assets/images/gpus/rtx-3080.jpg";
import RTX30802 from "../../assets/images/gpus/rtx-3080-2.jpg";
import RTX30803 from "../../assets/images/gpus/rtx-3080-3.jpg";
import RTX30804 from "../../assets/images/gpus/rtx-3080-4.jpg";
import RTX3070 from "../../assets/images/gpus/rtx-3070.jpg";
import RTX30702 from "../../assets/images/gpus/rtx-3070-2.jpg";
import RTX30703 from "../../assets/images/gpus/rtx-3070-3.jpg";
import RTX30704 from "../../assets/images/gpus/rtx-3070-4.jpg";
import RTX3060 from "../../assets/images/gpus/rtx-3060.jpg";
import RTX30602 from "../../assets/images/gpus/rtx-3060-2.jpg";
import RTX30603 from "../../assets/images/gpus/rtx-3060-3.jpg";
import RTX30604 from "../../assets/images/gpus/rtx-3060-4.jpg";

const gpus = [
  {
    id: uniqid(),
    category: "Graphics Cards",
    name: "EVGA GeForce RTX 3090",
    description:
      "EVGA NVIDIA GeForce RTX 3090 Ti GAMING X TRIO 24GB GDDR6X Ray-Tracing Graphics Card, 10752 Core",
    price: "1,857.00",
    originalPrice: "1857.00",
    quantity: "1",
    gallery: [RTX3090, RTX30902, RTX30903, RTX30904],
    image: RTX3090,
  },
  {
    id: uniqid(),
    category: "Graphics Cards",
    name: "Gigabyte GeForce RTX 3080 Ti",
    description:
      "Gigabyte NVIDIA GeForce RTX 3080 Ti FTW3 ULTRA GAMING 12GB GDDR6X Ray-Tracing Graphics Card, 10240 Core",
    price: "1,356.00",
    originalPrice: "1356.00",
    quantity: "1",
    image: RTX3080,
    gallery: [RTX3080, RTX30802, RTX30803, RTX30804],
  },
  {
    id: uniqid(),
    category: "Graphics Cards",
    name: "ASUS GeForce RTX 3070 Ti",
    description:
      "ASUS NVIDIA GeForce RTX 3070 Ti MASTER 8GB GDDR6X Ray-Tracing Graphics Card, 6144 Core, 1875MHz",
    price: "753.50",
    originalPrice: "753.50",
    quantity: "1",
    image: RTX3070,
    gallery: [RTX3070, RTX30702, RTX30703, RTX30704],
  },
  {
    id: uniqid(),
    category: "Graphics Cards",
    name: "MSI GeForce RTX 3060",
    description:
      "MSI NVIDIA GeForce RTX 3060 TWIN EDGE OC 12GB GDDR6 Graphics Card, 3584 Core, 1320MHz GPU, 1807MHz Boost",
    price: "475.34",
    originalPrice: "475.34",
    quantity: "1",
    image: RTX3060,
    gallery: [RTX3060, RTX30602, RTX30603, RTX30604],
  },
];

export default gpus;
