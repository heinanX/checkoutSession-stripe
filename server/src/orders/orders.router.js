const express = require('express')
const { getOrders, getOrder, createOrder } = require('./orders.controller')

const orderRouter = express.Router()
.get('/orders', getOrders)
.get('/orders/:id', getOrder)
.post('/create-checkout-session', createOrder)

module.exports = { orderRouter }