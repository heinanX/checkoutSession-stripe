require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
);

// ----- Saras kod
const CLIENT_URL = 'http://localhost:5173';
app.post("/create-checkout", async (req, res) => {

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "sek",
              product_data: {
                name: "Gitarr",
                description: "Viktigt i ditt liv",
              },
              unit_amount: "1500",
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${CLIENT_URL}/confirmation`,
        cancel_url: CLIENT_URL,
      });
  
        console.log(session);
        res.status(200).json({url: session.url})
    } catch (error) {
      console.log(error.message);
      res.status(400).json({message: 'oh no error'})
    }
  });

  // -------- end

app.get('/', (req, res) => {
    res.send('hello world again');
})


app.listen(3000, () => { console.log('Server is up and running..') })