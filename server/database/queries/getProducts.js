const connection = require('../connection');

const getAllCProducts = () => {
    return connection.query('select * from products Join categories on products.category_id = categories.id ;');
}

module.exports = { getAllCProducts };