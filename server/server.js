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
    name: "session",
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

/* app.get('/', (req, res) => {
    res.send('hello world again');
})

app.get('/api/products', async (req, res) => {
  try {
    const products = await stripe.products.list();
    console.log(products.data); // An array of product objects
    const productinfo = products.data
    res.status(200).json({ productinfo })
  } catch (error) {
    console.error(error);
  }
}) */

app.listen(3000, () => { console.log('Server is up and running..') })