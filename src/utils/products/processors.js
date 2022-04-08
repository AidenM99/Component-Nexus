import uniqid from "uniqid";
import Intel12600K from "../../assets/images/intel-i5-12600k.jpg";
import Intel12400F from "../../assets/images/intel-i5-12400f.jpg";
import Ryzen5600X from "../../assets/images/ryzen-5600X.jpg";
import Ryzen5950X from "../../assets/images/ryzen-5950X.jpg";

const processors = [
  {
    id: uniqid(),
    category: "Processors",
    name: "AMD Ryzen 5600X",
    description: "AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor",
    price: "£211.55",
    image: Ryzen5600X,
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "AMD Ryzen 5950X",
    description: "AMD Ryzen 9 5950X 3.4 GHz 16-Core Processor",
    price: "£504.95",
    image: Ryzen5950X,
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "Intel Core i5-12400F",
    description: "Intel Core i5-12400F 2.5 GHz 6-Core Processor",
    price: "£162.99",
    image: Intel12400F,
  },
  {
    id: uniqid(),
    category: "Processors",
    name: "Intel Core i5-12600K",
    description: "Intel Core i5-12600K 3.7 GHz 10-Core Processor",
    price: "£258.59",
    image: Intel12600K,
  },
];

export default processors;
