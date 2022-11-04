const axios = require("axios");
const BASE_URL = require("../../config");

const productsDetail = async (productId) => {

  const product = await axios.get(`${BASE_URL.detail}${productId}`);

  const productInfo = await axios.get(
    `${BASE_URL.detail}${productId}/description`
  );
 console.log('product service------->')


  return product.data
};

module.exports = productsDetail;
