import React from 'react';
import { useNavigate } from 'react-router-dom';

const RolePage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <img src="/HEALTH.png" alt="Health Logo" style={styles.logo} />
                <h1 style={styles.title}>Health Buddy</h1>
                <h2 style={styles.subtitle}>Select Role</h2>

                <button style={styles.button} onClick={() => navigate('/signup/patient')}>
                    Patient
                </button>
                <button style={styles.button} onClick={() => navigate('/signup/caregiver')}>
                    Caregiver
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
        borderRadius: '16px',
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: '360px',
        textAlign: 'center',
    },
    logo: {
        width: '70px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '5px',
        color: '#0d3c4c',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginBottom: '30px',
        color: '#666',
    },
    button: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '10px',
        border: '2px solid #26a69a',
        backgroundColor: '#fff',
        color: '#26a69a',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '15px',
        transition: '0.3s',
    },
};

export default RolePage;
