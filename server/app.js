const express = require('express');
const compression = require('compression');
const router =require('./router')

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(compression());

app.use(express.static('public'));
app.use(router)

module.exports = app