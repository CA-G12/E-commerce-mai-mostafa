const conn = require('../connection');

const categoriesQuery = () => {
   return conn.query('select * from categories ;').then((data) => data.rows);
}

module.exports = { categoriesQuery };