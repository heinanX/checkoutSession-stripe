const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
const fs = require('fs')

const getUsers = async (req, res) => {
  try {
      const users = await stripe.customers.list();
      const usersData = users.data
      
      res.status(200).json({ usersData })
    } catch (error) {
      console.error(error);
    }
}

const createUser = async (req, res) => {
  try { 
    const { email, description} = req.body
    const user = await stripe.customers.create({
      email: email,
      description: description
    });
  
    res.status(201).json({ user })
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