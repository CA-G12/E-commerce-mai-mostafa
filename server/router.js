const router = require('express').Router();

const { addProducts, getAllProducts, renderAdminPage, getAllCategories } = require('./controllers');

router.get('/admin', renderAdminPage);

router.get('/getData', getAllCategories);

router.post('/add-product', addProducts);

router.get('/get-products', getAllProducts);

module.exports = router;