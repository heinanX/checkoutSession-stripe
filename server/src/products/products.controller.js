const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)

const getProducts = async (req, res) => {
    try {
        const products = await stripe.products.list();
        //console.log(products.data); // An array of product objects
        const productinfo = products.data
        res.status(200).json({ productinfo })

      } catch (error) {
        console.error(error);
      }
}
const getProduct = async (req, res) => {
    try {
        const product = await stripe.products.retrieve(req.params.id);
        res.status(200).json({ product })

      } catch (error) {
        console.error(error);
      }
}

const addProduct = async (req, res) => {
    try {
        res.status(200).json({ message: 'add a product' })

      } catch (error) {
        console.error(error);
      }
}

const getPrice = async (req, res) => {
  try {
    const id = await stripe.prices.retrieve(req.params.id);
    res.status(200).json(id.unit_amount / 100)
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getProducts, getProduct, addProduct, getPrice }