import uniqid from "uniqid";
import Ryzen3600 from "../../assets/images/ryzen-3600.jpg";
import Ryzen5600X from "../../assets/images/ryzen-5600X.jpg";
import Ryzen5900X from "../../assets/images/ryzen-5900X.jpg";
import Ryzen5950X from "../../assets/images/ryzen-5950X.jpg";

const processors = [
  {
    id: uniqid(),
    category: "processors",
    name: "AMD Ryzen 3600X",
    description: "AMD Ryzen 5 3600",
    price: "£201.50",
    image: Ryzen3600,
  },
  {
    id: uniqid(),
    category: "processors",
    name: "AMD Ryzen 5600X",
    description: "AMD Ryzen 5 5600X",
    price: "£210.90",
    image: Ryzen5600X,
  },
  {
    id: uniqid(),
    category: "processors",
    name: "AMD Ryzen 5900X",
    description: "AMD Ryzen 9 5900X",
    price: "£420.00",
    image: Ryzen5900X,
  },
  {
    id: uniqid(),
    category: "processors",
    name: "AMD Ryzen 5950X",
    description: "AMD Ryzen 9 5950X",
    price: "£565.59",
    image: Ryzen5950X,
  },
];

export default processors;
