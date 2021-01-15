const express = require('express');
const controllerP = require('../controllers/products.js');
// const controllerR = require('../controllers/reviews');

const router = express.Router();

router.get('/', controllerP.get);

// router.get('/reviews', controllerR.get);
// router.post('/reviews', controllerR.post);

module.exports = router;
