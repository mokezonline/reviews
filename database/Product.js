const mongoose = require('mongoose');
const db = require('./index.js');
const Reviews = require('./Review');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  productName: String,
  imgUrl: String,
  rating: Number,
  ratingCount: Number,
  fit: String,
  activites: String
},
{
  timestamps: true
}
);



const Product = mongoose.model('Product', productSchema);

module.exports = Product;