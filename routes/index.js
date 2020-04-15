var express = require("express");
var router = express.Router();
const Product = require("../models/Product");

/* GET home page!!. */
router.get('/', async (req, res, next) => {
  const allProducts = await Product.find()
 res.json(allProducts)

  // res.render('index', { title: 'Express' });
});

module.exports = router;
