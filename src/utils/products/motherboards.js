import uniqid from "uniqid";
import B550Tomahawk from "../../assets/images/b550-tomahawk.jpg";
import B550RogStrix from "../../assets/images/b550-rog-strix.jpg";
import B550MSIMPG from "../../assets/images/b550-msi-mpg.jpg";
import B550MGigabyte from "../../assets/images/b550m-gigabyte.jpg";

const motherboards = [
  {
    id: uniqid(),
    category: "motherboards",
    name: "MSI MAG B550 TOMAHAWK",
    description: "MSI MAG B550 TOMAHAWK ATX AM4 Motherboard",
    price: "£139.95",
    image: B550Tomahawk,
  },
  {
    id: uniqid(),
    category: "motherboards",
    name: "Asus ROG STRIX B550-F",
    description: "Asus ROG STRIX B550-F GAMING (WI-FI) ATX AM4 Motherboard",
    price: "£179.84",
    image: B550RogStrix,
  },
  {
    id: uniqid(),
    category: "motherboards",
    name: "MSI MPG B550 GAMING",
    description: "MSI MPG B550 GAMING PLUS ATX AM4 Motherboard",
    price: "£109.91",
    image: B550MSIMPG,
  },
  {
    id: uniqid(),
    category: "motherboards",
    name: "Gigabyte B550M DS3H",
    description: "Gigabyte B550M DS3H Micro ATX AM4 Motherboard",
    price: "£70.98",
    image: B550MGigabyte,
  },
];

export default motherboards;
