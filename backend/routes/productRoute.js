const express = require('express');
const { createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/product/new', createProduct);

router.get('/products', getAllProducts);

router.get('/product/:id', getProductDetails)

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

module.exports = router