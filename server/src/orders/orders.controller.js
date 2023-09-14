const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
const fs = require('fs')

const createOrder = async (req, res) => {
    
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:5173/success?id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:5173/failed',    
        payment_method_types:['card'],
        mode: 'payment',
        currency: 'sek',
        //allow_promotion_codes: true, //new
        customer: req.body.userId,
        line_items: req.body.order
        })
        res.status(200).json({
            url: session.url,
    });


    //res.status(200).json({ message: 'create order'})
}

const createOrderLocally = (order) => {
    try {
        fs.readFile('./src/db/users.json', (err, data) => {
            const userData = JSON.parse(data);
            
            userData.push = order

        });
        fs.writeFile('./src/db/users.json', JSON.stringify(userData, null, 2), function (err) {
            if (err) { res.status(404).send(`Unable to write file. See ${err}`) }});

    } catch (error) {
        console.log('failed to read orders.json file');
    }
}

const getOrders = (req, res) => {
    res.status(200).json({ message: 'get orders'})
}

const getOrder = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.params.id,
    {expand: ['line_items']})

    if (session.payment_status === 'paid'){
        const newOrderObject = {
            id: session.id,
            products: session.line_items.data,
            orderTotal: session.amount_total / 100,
            customerId: session.customer,
            customer: session.customer_details.email,
            status: session.status
        }

        //createOrderLocally(newOrderObject)
        res.status(200).json(newOrderObject)
    }
 
}



module.exports = { getOrders, getOrder, createOrder}