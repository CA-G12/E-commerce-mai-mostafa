const query = require("../database/queries/getData");

const getAllData = (req, res) => {

  query().then((data) => res.send(data));
};

module.exports = getAllData ;