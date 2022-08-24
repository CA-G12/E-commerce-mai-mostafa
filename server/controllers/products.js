const { addProduct, getAllCProducts } = require('../database/queries/');

const { join } = require('path');

const addProducts = (req, res) => {
    addProduct(req.body);
};

const getAllProducts = (req, res) => {
    getAllCProducts().then((data) => {
        console.log(data)
    });
};

module.exports = { addProducts, getAllProducts };
