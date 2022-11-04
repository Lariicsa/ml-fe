const productDetail = require("../services/productDetail");

const product = {
  getProductDetail: async (req, res) => {
    try {
      const response = await productDetail(req.params.id);
      console.log("controller>>", response);
      res.json(response);
    } catch (error) {
      console.error(error);
      // throw error;
    }
  },
};
module.exports = product;
