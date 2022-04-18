import uniqid from "uniqid";
import B550Tomahawk from "../../assets/images/motherboards/b550-tomahawk.jpg";
import B550Tomahawk2 from "../../assets/images/motherboards/b550-tomahawk-2.jpg";
import B550Tomahawk3 from "../../assets/images/motherboards/b550-tomahawk-3.jpg";
import B550Tomahawk4 from "../../assets/images/motherboards/b550-tomahawk-4.jpg";
import B550RogStrix from "../../assets/images/motherboards/b550-rog-strix.jpg";
import B550RogStrix2 from "../../assets/images/motherboards/b550-rog-strix-2.jpg";
import B550RogStrix3 from "../../assets/images/motherboards/b550-rog-strix-3.jpg";
import B550RogStrix4 from "../../assets/images/motherboards/b550-rog-strix-4.jpg";
import B550MSIMPG from "../../assets/images/motherboards/b550-msi-mpg.jpg";
import B550MSIMPG2 from "../../assets/images/motherboards/b550-msi-mpg-2.jpg";
import B550MSIMPG3 from "../../assets/images/motherboards/b550-msi-mpg-3.jpg";
import B550MSIMPG4 from "../../assets/images/motherboards/b550-msi-mpg-4.jpg";
import B550MGigabyte from "../../assets/images/motherboards/b550m-gigabyte.jpg";
import B550MGigabyte2 from "../../assets/images/motherboards/b550m-gigabyte-2.jpg";
import B550MGigabyte3 from "../../assets/images/motherboards/b550m-gigabyte-3.jpg";
import B550MGigabyte4 from "../../assets/images/motherboards/b550m-gigabyte-4.jpg";

const motherboards = [
  {
    id: uniqid(),
    category: "Motherboards",
    name: "MSI MAG B550 TOMAHAWK",
    description:
      "MSI MAG B550 TOMAHAWK, AMD B550, S AM4, DDR4, SATA3, PCIe 4.0, Dual M.2, CrossFire, 2.5GbE, USB 3.2 Gen2, ATX ",
    price: "139.95",
    originalPrice: "139.95",
    quantity: "1",
    gallery: [B550Tomahawk, B550Tomahawk2, B550Tomahawk3, B550Tomahawk4],
    image: B550Tomahawk,
  },
  {
    id: uniqid(),
    category: "Motherboards",
    name: "Asus ROG STRIX B550-F",
    description:
      "ASUS ROG STRIX B550-F GAMING (WI-FI), AMD B550, AM4, DDR4, PCIe 4.0, SATA3, Dual M.2, CrossFire, 2.5GbE/ax WiFi, ATX",
    price: "179.84",
    originalPrice: "179.84",
    quantity: "1",
    gallery: [B550RogStrix, B550RogStrix2, B550RogStrix3, B550RogStrix4],
    image: B550RogStrix,
  },
  {
    id: uniqid(),
    category: "Motherboards",
    name: "MSI MPG B550 GAMING",
    description:
      "MSI MPG B550 GAMING CARBON WIFI, AMD B550, S AM4, DDR4, SATA3, PCIe 4.0, Dual M.2, CrossFire, 2.5GbE, ax/BT5.1, ATX",
    price: "109.91",
    originalPrice: "109.91",
    quantity: "1",
    gallery: [B550MSIMPG, B550MSIMPG2, B550MSIMPG3, B550MSIMPG4],
    image: B550MSIMPG,
  },
  {
    id: uniqid(),
    category: "Motherboards",
    name: "Gigabyte B550M DS3H",
    description:
      "Gigabyte B550M DS3H, AMD B550, AM4, DDR4, SATA3, PCIe 4.0, Dual M.2, GbE, USB 3.2 Gen1, Micro-ATX",
    price: "70.98",
    originalPrice: "70.98",
    quantity: "1",
    gallery: [B550MGigabyte, B550MGigabyte2, B550MGigabyte3, B550MGigabyte4],
    image: B550MGigabyte,
  },
];

export default motherboards;
