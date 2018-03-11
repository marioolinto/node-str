'use stricts';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://mario:momc@ds261678.mlab.com:61678/mnode-store');

//Carrega os modelos
const Product = require('./models/product');

//Carrega Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;