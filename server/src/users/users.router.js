const express = require('express');
const { getUsers, createUser } = require('./users.controller')

const userRouter = express.Router()
.get('/users', getUsers)
.post('/users', createUser)

module.exports = { userRouter }

module.exports = { userRouter }