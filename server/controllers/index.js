const { renderAdminPage, getAllCategories } = require('./getCategories');

const { addProducts, getAllProducts } = require('./products');

module.exports = { addProducts, getAllProducts, renderAdminPage, getAllCategories };
