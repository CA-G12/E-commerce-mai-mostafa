const { addProduct, getAllCProducts } = require('../database/queries/');

const { join } = require('path');

const addProducts = (req, res) => {
    addProduct(req.body);
};

const getAllProducts = (req, res) => {
    getAllCProducts().then((data) => {
            res.send(data.rows);        
    });
};

module.exports = { addProducts, getAllProducts };
