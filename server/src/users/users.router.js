const express = require('express');
const { getUsers, createUser } = require('./users.controller')
const { hashPasses } = require('../middlewares')

const userRouter = express.Router()
.get('/users', getUsers)
.post('/users', hashPasses, createUser)

module.exports = { userRouter }

module.exports = { userRouter }