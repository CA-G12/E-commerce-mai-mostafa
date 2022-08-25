const { join } = require('path');
const { categoriesQuery } = require('../database/queries');

const renderAdminPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'admin.html'));
};

const getAllCategories = (req, res) => {
  categoriesQuery().then((data) => {
    res.send(data);
  });
};

module.exports = { renderAdminPage, getAllCategories };
