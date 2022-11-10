const express = require("express");
const router = express.Router();
const product = require("../controllers/productController");

router.get("/:id", product.getProductDetail);

module.exports = router;
