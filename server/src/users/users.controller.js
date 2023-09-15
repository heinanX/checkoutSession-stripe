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

const loginUser = async (req, res) => {
  const { email} = req.body

  if (req.session.user) {
    return res.status(200).json(email);
  }

  const users = await stripe.customers.list();
  const userData = users.data
  const confirmedUser = userData.find((user) => user.email == email)

  const userObject = {
    id: confirmedUser.id,
    email: email,
    uname: confirmedUser.description
  }

  req.session.user = userObject
  res.status(200).json({ userObject })
}

const logOutUser = (req, res) => {
  if (!req.session.user) {
    return res.status(400).json("Cannot logout when you are not logged in");
  }
  req.session.user = null;
  console.log(req.session.user);
  res.status(200).json({ message: 'Logged out'});
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

const checkLoginStatus = (req, res) => {
  if (req.session.user) {
    res.status(200).json(req.session.user)
  } else {
    res.status(404).json({message: 'User needs to login'})
  }
}

module.exports = { getUsers, createUser, loginUser, logOutUser, checkLoginStatus }