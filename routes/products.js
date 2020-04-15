var express = require("express");
var router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");

router.get("/", async (req, res, next) => {
  const allProducts = await Product.find();
  allProducts.length !== 0
    ? res.json(allProducts)
    : res.send("No products found!");
});

router.get("/:id", async (req, res, next) => {
  try {
    const theProduct = await Product.findById(req.params.id);
   // console.log(theProduct);
    res.json(theProduct);
  } catch (error) {
    res.status(404).json({ errorMessage: "Not found" });
  }
});

router.post("/addtowishlist/:id", async (req, res, next) => {


  const theProduct = await Product.findById(req.params.id);
  res.json(theProduct);
 
  await User.findByIdAndUpdate(req.session.currentUser._id, { $push: { wishList: theProduct._id } });
  
});


router.post("/removefromwishlist/:id", async (req, res, next) => {

  await User.findByIdAndUpdate(req.session.currentUser._id, { $pull: { wishList: req.params.id } });
  res.json(req.params.id + 'removed');

});

/// Cart Routes:

router.post("/addtocart/:id", async (req, res, next) => {
  const theProduct = await Product.findById(req.params.id);
  const theQuantity = req.body.quantity;
  const loggedUser = await User.findById(req.session.currentUser._id);

  const productIf = [...loggedUser.cartList].filter((product) => {
    return product.productId == theProduct.id;
  });

  if (productIf.length) {
    const updatedCartList = loggedUser.cartList.map((product) => {
      if (product.productId == theProduct.id) {
        product.quantity = theQuantity;
      }
      return product;
    });
    await User.findByIdAndUpdate(req.session.currentUser._id, {
      cartList: updatedCartList,
    });
  } else {
    await User.findByIdAndUpdate(req.session.currentUser._id, {
      $push: { cartList: { productId: theProduct, quantity: theQuantity } },
    });
  }
  res.json("Cartlist updated correctly");
});

router.delete("/deletefromcart/:id", async (req, res, next) => {
  const productToDelete = req.params.id;
  const loggedUser = await User.findById(req.session.currentUser._id);

  // console.log('Aqui=========+>' +loggedUser );
  // console.log('cartlist------->' + loggedUser.cartList[0]);

  const updatedCartList = [...loggedUser.cartList].filter((product) => {
    console.log(String(product.productId));
    console.log(productToDelete);
    return String(product.productId) !== productToDelete;
  });
  // console.log(productToDelete);
  console.log(updatedCartList);

  await User.findByIdAndUpdate(req.session.currentUser._id, {
    cartList: updatedCartList,
  });
  res.json("Product removed");
  // await loggedUser.cartList.pull({ productId: productToDelete })
});

router.delete('/deletefromcart/:id', async (req, res, next) => {

  const productToDelete = req.params.id;
  const loggedUser = await User.findById(req.session.currentUser._id);

  // console.log('Aqui=========+>' +loggedUser );
  // console.log('cartlist------->' + loggedUser.cartList[0]);

  const updatedCartList = [...loggedUser.cartList].filter((product) => {
    console.log(String(product.productId));
    console.log(productToDelete);
    return String(product.productId) !== productToDelete;
  });
  // console.log(productToDelete);
  console.log(updatedCartList);

  await User.findByIdAndUpdate(req.session.currentUser._id, {
    cartList: updatedCartList,
  })
  res.json('Product removed')
  // await loggedUser.cartList.pull({ productId: productToDelete })
})

module.exports = router;
