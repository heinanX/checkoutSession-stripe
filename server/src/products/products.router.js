const { getProducts, getProduct, addProduct, getPrice } = require('./products.controller');

const express = require('express');

const productRouter = express
.Router()
.get('/products', getProducts)
.get('/products/:id', getProduct)
.post('/products', addProduct)
.get('/products/price/:id', getPrice)

module.exports = { productRouter }