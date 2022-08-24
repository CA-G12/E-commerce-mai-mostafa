const query = require("../database/queries/getCategories"); //getAllCategories
const { join } = require("path");

const renderAdminPage = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "admin.html"));
};

const getAllCategories = (req, res) => {
  console.log(req.url);
  query().then((data) => {
    /*console.log('**************',data)*/ res.send(data);
  });
};

const addProducts = (req, res) => {
  console.log(req.body);
  // query().then((data) => {/*console.log('**************',data);*/res.send(data)});
};

module.exports = { renderAdminPage, getAllCategories, addProducts };
