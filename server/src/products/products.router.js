const { getProducts, getProduct ,addProduct } = require('./products.controller');

const express = require('express');

const productRouter = express
.Router()
.get('/products', getProducts)
.get('/products/:id', getProduct)
.post('/products', addProduct)

module.exports = { productRouter }