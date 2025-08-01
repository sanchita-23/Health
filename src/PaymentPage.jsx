import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe publishable key here
const stripePromise = loadStripe('pk_test_51Rr1JS3Kc2os4yEUzXtsRGuB54kTAFyJ93POplqifWcR6UxPm5U3bHDjEmYX6ccsLFsuLCOUyymH7oHCYFrkeSZp00k5YeldXd'); 

const PaymentPage = () => {
    const styles = {
        page: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to right, #e0fdfd, #ffffff)',
            fontFamily: "'Nunito', sans-serif",
        },
        form: {
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '400px',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#009688',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#00796b',
            textAlign: 'center',
        }
    };

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // You can dynamically pass email or amount if needed
        const response = await fetch('http://localhost:5000/api/payment/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 9.99,  // in USD
                email: 'testuser@healthbuddy.com'
            }),
        });

        const session = await response.json();
        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            alert(result.error.message);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.form}>
                <div style={styles.title}>Upgrade to Premium</div>
                <button style={styles.button} onClick={handleCheckout}>
                    Pay $9.99 / Month
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
