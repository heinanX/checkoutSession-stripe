const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)

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
/*     try {
        res.status(200).json({ message: 'hello' })
      } catch (error) {
        console.error(error);
      } */
      res.status(200).json({ message: 'user created' })
    
}

module.exports = { getUsers, createUser }