const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
//const fs = require('fs')

const getOrders = (req, res) => {
    res.status(200).json({ message: 'get orders'})
}

const createOrder = async (req, res) => {
    
    const session = await stripe.checkout.sessions.create({
        success_url: 'https://localhost:5173/success',
        cancel_url: 'https://localhost:5173/',    
        //cancel_url: 'https://localhost:5173/success?id={CHECKOUT_SESSION_ID}',    
        payment_method_types:['card'],
        mode: 'payment',
        currency: 'sek',
        customer: 'cus_OapDRRmPVvFcff',
        line_items: [{  
            price: 'price_1NmYBHBcsMmryWv0wEimPZQt',
            quantity: 2
        }]
        })
        res.status(200).json({
            id: session.id,
    });


    //res.status(200).json({ message: 'create order'})
}

module.exports = { getOrders, createOrder}