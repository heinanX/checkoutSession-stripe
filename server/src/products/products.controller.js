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
/*         const products = await stripe.products.list();
        //console.log(products.data); // An array of product objects
        const productinfo = products.data
        res.status(200).json({ productinfo }) */
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

const addProduct = async (req, res) => {
    try {
        res.status(200).json({ message: 'add a product' })

      } catch (error) {
        console.error(error);
      }
}

/* const getPrice = async (req, res) => {
  try {
    const id = await stripe.prices.retrieve(req.params.id);
    res.status(200).json(id.unit_amount / 100)
  } catch (err) {
    console.log(err);
  }
}
 */
module.exports = { getProducts, getProduct, addProduct/* , getPrice */ }