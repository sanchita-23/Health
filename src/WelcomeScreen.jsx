import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <img src="/HEALTH.png" alt="Health Logo" style={styles.logo} />

                <h1 style={styles.title}>Health Buddy</h1>
                <p style={styles.subtitle}>Welcome</p>

                <button style={styles.outlineBtn} onClick={() => navigate('/login')}>
                    Log In
                </button>
                <button style={styles.filledBtn} onClick={() => navigate('/roles')}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        background: 'linear-gradient(to bottom right, #e0f7fa, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
    },
    card: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '360px',
    },
    logo: {
        width: '80px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '5px',
        color: '#0d3c4c',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '30px',
    },
    outlineBtn: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '10px',
        border: '2px solid #00897b',
        backgroundColor: '#fff',
        color: '#00897b',
        fontWeight: '600',
        marginBottom: '15px',
        cursor: 'pointer',
    },
    filledBtn: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#00897b',
        color: '#fff',
        fontWeight: '600',
        cursor: 'pointer',
    },
};

export default WelcomeScreen;
