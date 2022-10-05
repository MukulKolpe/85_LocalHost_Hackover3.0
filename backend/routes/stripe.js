const express = require('express');
const app = express();
const router = express.Router();
const stripe = require('stripe')('sk_test_51LpOOBSGux33h6dxUNsiUUfhWtIuFGe5Vbx1XGfR0lDGPV0G8uRweLndzdW73tJvYMY8XGvRFg5SAtLmJQtqYgh000YJnVZaZa')

router.post('/create-checkout-session', async (req, res) => {
  const {price , name , description , image} = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: name,
            description: description,

          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/events',
  });

  res.send({url: session.url});
});

module.exports = router;