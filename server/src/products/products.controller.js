const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)

const getProducts = async (req, res) => {
    try {
      const productsArray = [];
      const products = await stripe.products.list()
      for (const product of products.data) {
        const price = await stripe.prices.retrieve(product.default_price);
        const productObject = {
          id: product.id,
          title: product.name,
          description: product.description,
          price:price.unit_amount_decimal/100,
          default_price: product.default_price,
          images: product.images[0]
        }
        productsArray.push(productObject)
      }
        res.status(200).json({ productsArray })
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

module.exports = { getProducts, getProduct }