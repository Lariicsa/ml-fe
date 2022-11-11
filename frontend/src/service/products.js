import { MAIN_SERVICE } from "@/service/index";

const getProductById = (id) => MAIN_SERVICE.get(`/items/${id}`);
const getProductQuery = (param) => MAIN_SERVICE.get(`/items?q=${param}`);

export { getProductQuery, getProductById };
