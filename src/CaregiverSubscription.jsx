import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaregiverSubscription = () => {
    const navigate = useNavigate();

    const styles = {
        page: {
            padding: '40px',
            fontFamily: "'Nunito', sans-serif",
            background: 'linear-gradient(to right, #e0fdfd, #ffffff)',
            minHeight: '100vh',
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#009688',
            marginBottom: '30px',
        },
        grid: {
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
        },
        card: {
            flex: '1',
            minWidth: '300px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            padding: '25px',
            transition: '0.3s',
        },
        premiumCard: {
            border: '2px solid #009688',
            background: '#e0f7fa',
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#00695c',
        },
        listItem: {
            fontSize: '1rem',
            marginBottom: '10px',
        },
        button: {
            marginTop: '20px',
            padding: '12px 20px',
            backgroundColor: '#009688',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Caregiver Subscriptions</h1>
            <div style={styles.grid}>
                {/* Free Listing */}
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Free Listing</h2>
                    <ul>
                        <li style={styles.listItem}>✅ Standard visibility on caregiver search page</li>
                        <li style={styles.listItem}>✅ Basic profile listing</li>
                        <li style={styles.listItem}>❌ No profile highlights</li>
                        <li style={styles.listItem}>❌ No analytics or early access</li>
                    </ul>
                </div>

                {/* Premium Listing */}
                <div style={{ ...styles.card, ...styles.premiumCard }}>
                    <h2 style={styles.cardTitle}>Premium Listing</h2>
                    <ul>
                        <li style={styles.listItem}>🌟 Highlighted profile on search page</li>
                        <li style={styles.listItem}>📊 Enhanced analytics (patient interest, ratings)</li>
                        <li style={styles.listItem}>🚀 Early access to top-rated patient requests</li>
                        <li style={styles.listItem}>✅ Better visibility and trust rating</li>
                    </ul>
                    <button
                        style={styles.button}
                        onClick={() => navigate('/payment')}
                    >
                        Upgrade to Premium
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaregiverSubscription;
