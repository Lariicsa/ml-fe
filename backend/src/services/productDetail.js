const axios = require("axios");
const BASE_URL = require("../../config");

const productsDetail = async (productId) => {
  const product = await axios.get(`${BASE_URL.detail}${productId}`);

  const productDescription = await axios.get(
    `${BASE_URL.detail}${productId}/description`
  );
  console.log("product service------->");

  const productDetail = {
    condition: product.data.condition,
    description: productDescription.data.plain_text,
    free_shipping: product.data.shipping.free_shipping,
    id: product.data.id,
    title: product.data.title,
    price: {
      currency: product.data.currency_id ? "$" : "",
      amount: product.data.price,
    },
    picture: product.data.pictures[0].url,
    sold_quantity: product.data.sold_quantity,
  };

  return productDetail;
};

module.exports = productsDetail;
