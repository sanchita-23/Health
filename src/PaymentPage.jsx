import React, { useState } from 'react';

const PaymentPage = () => {
    const [form, setForm] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment processed successfully (simulated).");
        // Add payment gateway integration here (e.g. Stripe or Razorpay)
    };

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
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '1rem',
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
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#00796b',
            textAlign: 'center',
        }
    };

    return (
        <div style={styles.page}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.title}>Upgrade to Premium</div>

                <input
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    style={styles.input}
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    style={styles.input}
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="Expiry Date (MM/YY)"
                    style={styles.input}
                    value={form.expiry}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="cvv"
                    placeholder="CVV"
                    style={styles.input}
                    value={form.cvv}
                    onChange={handleChange}
                    required
                />

                <button type="submit" style={styles.button}>Pay $9.99 / Month</button>
            </form>
        </div>
    );
};

export default PaymentPage;
