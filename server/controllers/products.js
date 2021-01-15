const Product = require('../../database/Product');

module.exports = {
  get(req, res) {
    Product.find()
      .then((r) => {
        res.status(200).send(r);
      }).catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
}