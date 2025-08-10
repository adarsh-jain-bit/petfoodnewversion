// src/schema/database/productSchema.js
const mongoose = require('mongoose');


// const reviewSchema = new mongoose.Schema({
//   user: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//     min: 0,
//     max: 5,
//   },
//   comment: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });


const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_category: {
    type: String,
    required: true,
  },
  product_brand: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  sizes: [{
    size: {
      type: String,
      required: true, // Size name (e.g., "100grams", "200grams")
    },
    price: {
      type: Number,
      required: true, // Price for the specific size
    },
    oldprice: {
      type: Number,
      required: true, // Old price for the specific size
    },
    discount: {
      type: Number,
      required: true, // Discount for the specific size (calculated dynamically)
    },
  }],
  images: {
    type: [String],
    required: true,
  },
  // reviews: [reviewSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.models.products || mongoose.model('products', productSchema);
module.exports = Product;
