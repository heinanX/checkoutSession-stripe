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
        const { pass, email } = req.body

        fs.readFile('./src/db/users.json', async (err, data) => {
            if (err) { res.status(404).send(`Unable to read source file. See ${err}`) }
            const userData = await JSON.parse(data);

            const confirmedUser = userData.find((user) => user.email == email)
            const checkpass = confirmedUser.password

            bcrypt.compare(pass, checkpass, function (err, result) {
                next();
            });
        })

    } catch {
        res.status(400).json({ message: 'invalid login' })
    }
}

module.exports = { hashPass, unhashPass }