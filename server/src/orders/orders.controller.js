const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
const fs = require('fs')

const createOrder = async (req, res) => {

    if (!req.session.user) { return res.status(404).json({ message: 'you need to be logged in'})}

    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:5173/success?id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:5173/failed',
        payment_method_types: ['card'],
        mode: 'payment',
        currency: 'sek',
        allow_promotion_codes: true, //new
        customer: req.body.userId,
        line_items: req.body.order
    })
    res.status(200).json({
        url: session.url,
    });


    //res.status(200).json({ message: 'create order'})
}
const createOrderLocally = (order) => {
    fs.readFile('./src/db/orders.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const orderData = JSON.parse(data);
            orderData.push(order);

            fs.writeFile('./src/db/orders.json', JSON.stringify(orderData, null, 2), (err) => {
                if (err) { res.status(404).send(`Unable to write file. See ${err}`) }
            });
        } catch (error) {
            console.log('Error writing file:', error);
        }
    });
};


const getOrders = async (req, res) => {

    if (!req.session.user) { return res.status(404).json({ message: 'you need to be logged in'})}

    const sessions = await stripe.checkout.sessions.list({
        customer: req.session.user.id,
      });

    res.status(200).json({ sessions })
}

const setOrderDate = (setDate) => {
    const date = new Date(setDate * 1000);
    const formattedDate = `${date.toLocaleString("en-GB", {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}`;
    return formattedDate;
}

const getOrder = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.params.id,
        { expand: ['line_items'] })

    if (session.payment_status === 'paid') {

        const products = [];

        for (const product of session.line_items.data) {
            const newProductObject = {
                id: product.id,
                amount_discount: product.amount_discount,
                amount_total: product.amount_total,
                description: product.description,
                price: {
                    id: product.price.id,
                    unit_amount: product.price.unit_amount
                },
                quantity: product.quantity
            }
            products.push(newProductObject)
        }

        const newOrderObject = {
            id: session.id,
            products: products,
            orderTotal: session.amount_total / 100,
            customerId: session.customer,
            customer: session.customer_details.email,
            status: session.status,
            created: setOrderDate(session.created),
            discount: session.total_details.amount_discount / 100
        }

        createOrderLocally(newOrderObject)

        res.status(200).json(newOrderObject)
    }

}



module.exports = { getOrders, getOrder, createOrder }