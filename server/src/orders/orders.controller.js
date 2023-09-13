const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
//const fs = require('fs')

const getOrders = (req, res) => {
    res.status(200).json({ message: 'get orders'})
}

const createOrder = async (req, res) => {
    
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/failed',    
        //cancel_url: 'https://localhost:5173/success?id={CHECKOUT_SESSION_ID}',    
        payment_method_types:['card'],
        mode: 'payment',
        currency: 'sek',
        customer: req.body.userId,
        line_items: req.body.order
        })
        res.status(200).json({
            url: session.url,
    });


    //res.status(200).json({ message: 'create order'})
}

module.exports = { getOrders, createOrder}