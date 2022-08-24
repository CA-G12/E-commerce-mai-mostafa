const conn = require('../connection');

const getAllCategories = () => {

   return conn.query('select * from categories ;').then((data)=> data.rows);

}
module.exports = getAllCategories ;