const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = {
    brand: String,
    name: String,
    description: String,
    originalPrice: String,
    actualPrice: String,
    feedback: [{ }],// backlog
    rating: [ ], 
    photo: String,
    shippingTime: String,
    material: String,
    color: String,
    size: String,
    stock: Number
  }
  
  const Product = mongoose.model('Product', productSchema)

  module.exports = Product

  