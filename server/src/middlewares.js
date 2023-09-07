const bcrypt = require('bcrypt')
//const express = require('express')


// Function that hashes the incoming password before sending it to save function
const hashPasses = (req, res, next) => {
    const saltRounds = 10;
    const pass = req.body.password
    bcrypt.hash(pass, saltRounds, function(err, hash) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Password hashing failed' });
        }

        req.hashedPassword = hash;
        next()
    });

}

module.exports = { hashPasses }