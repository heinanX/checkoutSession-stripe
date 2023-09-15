const bcrypt = require('bcrypt')
const fs = require('fs')


// Function that hashes the incoming password before sending it to save function
const hashPass = (req, res, next) => {
    const saltRounds = 10;
    const pass = req.body.password
    bcrypt.hash(pass, saltRounds, function (err, hash) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Password hashing failed' });
        }

        req.hashedPassword = hash;
        next()
    });

}

// Function that unhashes incoming password, compares it to db and sends a response
const unhashPass = (req, res, next) => {
    try {
        const { password, email } = req.body

        fs.readFile('./src/db/users.json', async (err, data) => {
            if (err) { res.status(404).send(`Unable to read source file. See ${err}`) }
            const userData = await JSON.parse(data);

            const confirmedUser = userData.find((user) => user.email == email)
            if (!confirmedUser) {
                return res.status(400).json({ message: 'invalid login' });
            }

            bcrypt.compare(password, confirmedUser.password, function (err, result) {
                if (err || !result) {
                    return res.status(400).json({ message: 'invalid login' });
                }
                next();
            });
        })

    } catch {
        res.status(400).json({ message: 'invalid login' })
    }
}

// Function that checks incoming email 
const checkAvailability = (req, res, next) => {
   try {
    fs.readFile('./src/db/users.json', (err, data) => {
        if (err) { res.status(404).send(`Unable to read source file. See ${err}`) }
        const userData = JSON.parse(data);
      
        const user = userData.find((user) => user.email === req.body.email);
        if (user) {
            res.status(402).json({message: 'User already exists'});
            return;
          }

      })

      next();
   } catch (error) {
    
   }

}



module.exports = { hashPass, unhashPass, checkAvailability }