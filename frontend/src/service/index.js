import axios from "axios";
import CONFIG from "../config/index";
const BASE_URL = CONFIG.apiUrl;

const HEADERS = {
  "Content-Type": "application/json",
};

const MAIN_SERVICE = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export { MAIN_SERVICE };
