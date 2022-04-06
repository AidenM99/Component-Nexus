import processors from "./processors";
import gpus from "./gpus";
import ram from "./ram";
import motherboards from "./motherboards";

const products = [...processors, ...gpus, ...ram, ...motherboards];

export default products;
