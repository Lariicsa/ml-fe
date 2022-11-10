const axios = require("axios");
const BASE_URL = require("../../config");

const productSearch = async (param) => {
  try {
    const response = await axios.get(`${BASE_URL.searching}/search?q=${param}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

module.exports = productSearch;
