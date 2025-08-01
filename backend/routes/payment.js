const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = new Stripe('process.env.STRIPE_SECRET_KEY'); //  secret key

router.post('/create-checkout-session', async (req, res) => {
    const { amount, email } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: 'HealthBuddy Premium Subscription' },
                        unit_amount: amount * 100, // Convert $10 to 1000 cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5174/payment-success',
            cancel_url: 'http://localhost:5174/payment-cancel',
        });

        res.json({ id: session.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;