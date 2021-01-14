const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  productName: String,
  rating: Number,
  title: String,
  author: String,
  imageUrl: String,
  body: String,
  productInfo: {
    size: String,
    fit: String,
    Height: String
  },
  properties: {
    casualWear: Boolean,
    climbing: Boolean,
    yoga: Boolean,
    fishing: Boolean,
    running: Boolean,
    hiking: Boolean,
    mountainBiking: Boolean,
    snowWear: Boolean,
    surfing: Boolean,
    work: Boolean,
    recommended: Boolean
  }
},
{
  timestamps: true
}
);



const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
