var express = require('express');
var router = express.Router();
const User = require('../models/User')
const Product = require('../models/Product')


/* GET all the user wishlist products */
router.get('/wishlist/:id', function (req, res, next) {

  const { _id } = req.session.currentUser;
  User.findById(_id).populate('wishList')
    .then(user => {
      //console.log(user)
      res.json(user.wishList)
    })
    .catch(error => {
      next(error)
    })

});

/// delete wishList

router.post("/removefromwishlist/:id", async (req, res, next) => {
  const theProduct = await Product.findById(req.params.id);
  res.json(theProduct);
  const loggedUser = req.session.currentUser._id

  await User.findByIdAndUpdate(loggedUser, { $pull: { wishList: theProduct._id } });

 // await console.log(loggedUser);
});


// GET all products from cart

router.get('/cart/:id', async (req, res, next) => {

  try {
  const requests = await User.findById(req.session.currentUser._id).populate('cartList.productId')
  res.json(requests.cartList);
  }catch(error) {
    res.status(404).json({errorMessage: 'Nothing found'})
  }
});

// GET all wishlist ids

router.get('/wishlistid/:id', async (req, res, next) => {

  //console.log(req.session.currentUser._id);
  try {
    const requests = await User.findById(req.session.currentUser._id)
    res.json(requests.wishList);
  }catch(error) {
    console.log('Error catcher')
    res.status(404).json({errorMessage: 'Nothing found'})
  }
});


module.exports = router;
