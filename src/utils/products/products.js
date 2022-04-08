import processors from "./processors";
import gpus from "./gpus";
import memory from "./memory";
import motherboards from "./motherboards";

const products = [...processors, ...gpus, ...memory, ...motherboards];

export default products;
