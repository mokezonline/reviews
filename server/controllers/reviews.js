const Product = require('../../database/Product');

module.exports = {
  get(req, res) {
    Product.find({})
  }
}