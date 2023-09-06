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
  res.status(201).json({ customer })

  const { email, description} = req.body

    fs.readFile('./src/db/users.json', (err, data) => {
      if (err) { res.status(404).send(`Unable to read source file. See ${err}`) }
      const userData = JSON.parse(data);
    
      userData.push(
        {
          email: email,
          password: req.hashedPassword
        }
      );
  
      fs.writeFile('./src/db/users.json', JSON.stringify(userData, null, 2), function (err) {
        if (err) { res.status(404).send(`Unable to write file. See ${err}`) }});
    })
   
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUsers, createUser }