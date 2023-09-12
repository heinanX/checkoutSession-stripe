require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session')
const { productRouter } = require('./src/products/products.router')
const { userRouter } = require('./src/users/users.router')
const { orderRouter } = require('./src/orders/orders.router')

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cookieSession({
    name: "user",
    keys: ["aVeryS3cr3tK3y"],
    maxAge: 1000 * 60 * 60 * 24, // 24 Hours
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
);

app.use('/api', productRouter)
app.use('/api', userRouter)
app.use('/api', orderRouter)


app.listen(3000, () => { console.log('Server is up and running..') })