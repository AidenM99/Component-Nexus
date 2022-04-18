import uniqid from "uniqid";
import Intel11400 from "../../assets/images/processors/intel-i5-11400.jpg";
import Intel114002 from "../../assets/images/processors/intel-i5-11400-2.jpg";
import Intel114003 from "../../assets/images/processors/intel-i5-11400-3.jpg";
import Intel114004 from "../../assets/images/processors/intel-i5-11400-4.jpg";
import Intel11700K from "../../assets/images/processors/intel-i7-11700k.jpg";
import Intel11700K2 from "../../assets/images/processors/intel-i7-11700k-2.jpg";
import Intel11700K3 from "../../assets/images/processors/intel-i7-11700k-3.jpg";
import Intel11700K4 from "../../assets/images/processors/intel-i7-11700k-4.jpg";
import Ryzen5600X from "../../assets/images/processors/ryzen-5600X.jpg";
import Ryzen5600X2 from "../../assets/images/processors/ryzen-5600X-2.jpg";
import Ryzen5600X3 from "../../assets/images/processors/ryzen-5600X-3.jpg";
import Ryzen5600X4 from "../../assets/images/processors/ryzen-5600X-4.jpg";
import Ryzen5950X from "../../assets/images/processors/ryzen-5950X.jpg";
import Ryzen5950X2 from "../../assets/images/processors/ryzen-5950X-2.jpg";
import Ryzen5950X3 from "../../assets/images/processors/ryzen-5950X-3.jpg";
import Ryzen5950X4 from "../../assets/images/processors/ryzen-5950X-4.jpg";

const processors = [
  {
    id: uniqid(),
    category: "Processors",
    name: "AMD Ryzen 5 5600X",
    description:
      "AMD Ryzen™ 5 5600X, AM4, Zen 3, 6 Core, 12 Thread, 3.7GHz, 4.6GHz Turbo, 35MB Cache, PCIe 4.0, 65W",
    price: "211.55",
    originalPrice: "211.55",
    quantity: "1",
    gallery: [Ryzen5600X, Ryzen5600X2, Ryzen5600X3, Ryzen5600X4],
    image: Ryzen5600X,
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "AMD Ryzen 9 5950X",
    description:
      "AMD Ryzen 9 5950X, AM4, Zen 3, 16 Core, 32 Thread, 3.4GHz, 4.9GHz Turbo, 72MB Cache, PCIe 4.0, 105W",
    price: "504.95",
    originalPrice: "504.95",
    quantity: "1",
    image: Ryzen5950X,
    gallery: [Ryzen5950X, Ryzen5950X2, Ryzen5950X3, Ryzen5950X4],
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "Intel Core i7-11700K",
    description:
      "Intel Core i7 11700K, S 1700, Alder Lake, 6 Cores, 12 Threads, 2.5GHz, 4.4GHz Turbo, 18MB Cache, 65W",
    price: "276.45",
    originalPrice: "276.45",
    quantity: "1",
    gallery: [Intel11700K, Intel11700K2, Intel11700K3, Intel11700K4],
    image: Intel11700K,
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "Intel Core i5-11400",
    description:
      "Intel Core i7 9700, S 1700, Alder Lake, 10 Cores, 16 Threads, 3.7GHz, 4.9GHz Turbo, 20MB Cache, 125W",
    price: "168.96",
    originalPrice: "168.96",
    quantity: "1",
    gallery: [Intel11400, Intel114002, Intel114003, Intel114004],
    image: Intel11400,
  },
];

export default processors;
