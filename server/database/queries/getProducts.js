const connection = require('../connection');

const getAllCProducts = () => {
    return connection.query('select * from products ;').then((data)=> data.rows);
}

module.exports = { getAllCProducts };