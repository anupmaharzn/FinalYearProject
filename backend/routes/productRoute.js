const express = require('express');
const { createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.post('/product/new', isAuthenticatedUser, authorizeRoles('admin'), createProduct);

router.get('/products', getAllProducts);

router.get('/product/:id', getProductDetails)

router.put('/product/:id', isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

router.delete('/product/:id', isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router