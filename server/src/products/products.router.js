const { getProducts, getProduct } = require('./products.controller');

const express = require('express');

const productRouter = express
.Router()
.get('/products', getProducts)
.get('/products/:id', getProduct)

module.exports = { productRouter }