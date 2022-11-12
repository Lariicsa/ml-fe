const productDetail = require("../services/productDetail");
const productSearch = require("../services/productSearch")

const product = {
  getProductDetail: async (req, res) => {
    try {
      const response = await productDetail(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },

  getProductSearch: async (req, res) => {
    try {
      console.log('enter controller', req.query.q);
      const response = await productSearch(req.query.q);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = product;
