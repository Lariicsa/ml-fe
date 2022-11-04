const productDetail = require("../services/productDetail");

const product = {
  getProductDetail: async (req, res) => {
    try {
      const response = await productDetail(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },

  getProductDescription: async (req, res) => {
    try {
      const response = await productDetail(req.param.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = product;
