import React from 'react';

const SplashScreen = () => {
    return (
        <div style={styles.container}>
            <img src="/HEALTH.png" alt="Health Icon" style={styles.icon} />
            <h1 style={styles.title}>Health Buddy</h1>
            <p style={styles.subtitle}>Your Care Companion</p>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '80px',
        height: '80px',
        marginBottom: '16px'
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#666'
    }
};

export default SplashScreen;
