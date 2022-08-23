const router = require('express').Router();

const getAllCategories = require('./controllers/getData');

router.get('/',getAllCategories);

module.exports = router;