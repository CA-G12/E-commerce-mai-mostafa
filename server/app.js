const express = require('express');
const compression = require('compression');


const app = express();
app.set('port', process.env.PORT || 3000)

app.use(express.json())

app.use(express.urlencoded({ extended: false }));
app.use(compression());
module.exports = app