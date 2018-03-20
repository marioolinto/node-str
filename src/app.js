'use stricts';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();


//Configurando o cors
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

mongoose.connect('mongodb://mario:mario@ds261678.mlab.com:61678/mnode-store');

//Carrega os modelos
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use(cors(corsOptions));

module.exports = app;