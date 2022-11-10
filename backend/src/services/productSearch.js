const axios = require("axios");
const BASE_URL = require("../../config");

const productsSearch = async (param) => {
  const response = await axios
    .get(`${BASE_URL.searching}${param}`, { params: { limit: 4 } }) 
    

  const categories = [];
  response.data.filters.forEach((category) => {
    const curremCategory = category.values;
    categories.push(curremCategory);
  });
};

module.exports = productsSearch;
