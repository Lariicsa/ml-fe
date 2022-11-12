const axios = require("axios");
const BASE_URL = require("../../config");

const productSearch = async (param) => {
  try {
    const response = await axios.get(
      `${BASE_URL.searching}/search?q=${param}`,
      { params: { limit: 4 } }
    );

    const categories = response.data.available_filters.map((item) => {
      return item.values.map((ele) => {
        return ele.name
      });
    });

    const items = [];
    response.data.results.forEach((item) => {
      const currentItem = {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id ? "$" : "",
          amount: item.price,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        state_name: item.address.state_name,
      };
      items.push(currentItem);
    });

    const formattedData = {
      autor: {
        name: "Larissa",
        lastname: "Avila",
      },
      categories: categories[0],
      items: items,
    };

    return formattedData;
  } catch (error) {
    return error.response;
  }
};

module.exports = productSearch;
