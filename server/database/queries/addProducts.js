const connection = require('../connection')

const addProduct = (obj) => {
    return connection.query(`INSERT INTO products (pro_name, description, category_id, image, price) VALUES ($1, $2, $3, $4, $5);`, [obj.pro_name, obj.description, obj.category,obj.image, obj.price])
}

module.exports = { addProduct };