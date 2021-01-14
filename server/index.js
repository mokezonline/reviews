const express = require('express');
const app = express();
const path = require('path');
const PORT  = 3000;


const productDB  = require ('../database/Product.js');
const reviewDB  = require('../database/Review.js');

const productRoutes =  require('./routes/productR');
const reviewRoutes = require('./routes/reviewR');

app.use('/', express.static(path.join('dirname', '..', 'client', 'src')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})