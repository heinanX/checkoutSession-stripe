const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
const fs = require('fs')

const getUsers = async (req, res) => {
/*     try {
        const products = await stripe.users.list();
        console.log(products.data); // An array of product objects
        const productinfo = products.data
        res.status(200).json({ productinfo })
      } catch (error) {
        console.error(error);
      }*/
      res.status(200).json({ message: 'users' })
}

const createUser = async (req, res) => {
  try {
   
  const customer = await stripe.customers.create({
    email: req.body.email,
    description: req.body.description
  });
  res.status(200).json({ customer })
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUsers, createUser }