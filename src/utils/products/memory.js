import uniqid from "uniqid";
import CorsairVengeance from "../../assets/images/memory/corsair-vengeance.jpg";
import CorsairVengeance2 from "../../assets/images/memory/corsair-vengeance-2.jpg";
import CorsairVengeance3 from "../../assets/images/memory/corsair-vengeance-3.jpg";
import CorsairVengeance4 from "../../assets/images/memory/corsair-vengeance-4.jpg";
import KingstonHyperXFury from "../../assets/images/memory/kingston-hyperX-fury.jpg";
import KingstonHyperXFury2 from "../../assets/images/memory/kingston-hyperX-fury-2.jpg";
import KingstonHyperXFury3 from "../../assets/images/memory/kingston-hyperX-fury-3.jpg";
import KingstonHyperXFury4 from "../../assets/images/memory/kingston-hyperX-fury-4.jpg";
import NightHawk from "../../assets/images/memory/t-force-night-hawk.jpg";
import NightHawk2 from "../../assets/images/memory/t-force-night-hawk-4.jpg";
import NightHawk3 from "../../assets/images/memory/t-force-night-hawk-3.jpg";
import NightHawk4 from "../../assets/images/memory/t-force-night-hawk-2.jpg";
import CorsairVengeancePro from "../../assets/images/memory/corsair-vengeance-pro.jpg";
import CorsairVengeancePro2 from "../../assets/images/memory/corsair-vengeance-pro-2.jpg";
import CorsairVengeancePro3 from "../../assets/images/memory/corsair-vengeance-pro-3.jpg";
import CorsairVengeancePro4 from "../../assets/images/memory/corsair-vengeance-pro-4.jpg";

const ram = [
  {
    id: uniqid(),
    category: "Memory",
    name: "Corsair Vengeance LPX 16GB",
    description:
      "8GB (1x8GB) Corsair DDR4 SO-DIMM Vengeance, PC4-19200 (2400), Non-ECC Unbuffered, CAS 16-16-16-39, 1.2V",
    price: "70.00",
    originalPrice: "35.00",
    quantity: "1",
    gallery: [
      CorsairVengeance,
      CorsairVengeance2,
      CorsairVengeance3,
      CorsairVengeance4,
    ],
    image: CorsairVengeance,
  },
  {
    id: uniqid(),
    category: "Memory",
    name: "Kingston HyperX Fury 16GB",
    description:
      "HyperX FURY Black HX426C16FB3K2/16 Memory 16 GB Kit*(2 x 8 GB) 2666MHz, DDR4 CL16 DIMM 1Rx8",
    price: "83.67",
    originalPrice: "83.67",
    quantity: "1",
    gallery: [
      KingstonHyperXFury,
      KingstonHyperXFury2,
      KingstonHyperXFury3,
      KingstonHyperXFury4,
    ],
    image: KingstonHyperXFury,
  },
  {
    id: uniqid(),
    category: "Memory",
    name: "Team T-Force Night Hawk RGB 16 GB",
    description:
      "Team T-Force Night Hawk RGB - DDR4-16 GB Kit*(2 x 8 GB) - DIMM 288-PIN 2666MHz, 1.2V",
    price: "75.00",
    originalPrice: "75.00",
    quantity: "1",
    gallery: [NightHawk, NightHawk2, NightHawk3, NightHawk4],
    image: NightHawk,
  },
  {
    id: uniqid(),
    category: "Memory",
    name: "Corsair Vengeance RGB PRO 16GB",
    description:
      "Corsair Vengeance RGB PRO 32 GB (2 x 16 GB) DDR4 3200 MHz C16 XMP 2.0 Enthusiast RGB LED Illuminated Memory Kit - Black",
    price: "90.45",
    originalPrice: "90.45",
    quantity: "1",
    gallery: [
      CorsairVengeancePro,
      CorsairVengeancePro2,
      CorsairVengeancePro3,
      CorsairVengeancePro4,
    ],
    image: CorsairVengeancePro,
  },
];

export default ram;
