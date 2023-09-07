const express = require('express')
const { getOrders, createOrder } = require('./orders.controller')

const orderRouter = express.Router()
.get('/orders', getOrders)
.post('/create-checkout-session', createOrder)

module.exports = { orderRouter }