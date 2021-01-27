const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

const productDB = require('../database/Product.js');

const productRoutes = require('./routes/productRoutes');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
