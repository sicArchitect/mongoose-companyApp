const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products.controller');

router.get('/products', ProductsController.getAllProducts);

router.get('/products/random', ProductsController.getRandomProduct);

router.get('/products/:id', ProductsController.getProductById);

router.post('/products', ProductsController.postProduct);

router.put('/products/:id', ProductsController.putProduct);

router.delete('/products/:id', ProductsController.deleteProduct);

module.exports = router;
