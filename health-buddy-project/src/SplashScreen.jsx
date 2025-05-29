import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100); // triggers fade-in
    }, []);

    return (
        <div style={{ ...styles.container, opacity: fadeIn ? 1 : 0 }}>
            <img src="/HEALTH.png" alt="Health Logo" style={styles.logo} />
            <h1 style={styles.title}>Health Buddy</h1>
            <p style={styles.subtitle}>Your Care Companion</p>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(145deg, #d1f2eb, #ffffff)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        transition: 'opacity 1.5s ease',
    },
    logo: {
        width: '180px',
        height: '180px',
        marginBottom: '25px',
        animation: 'pulse 2s infinite',
        borderRadius: '20px',
        boxShadow: '0 12px 25px rgba(0,0,0,0.15)'
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '10px'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#555'
    }
};

// Added animation to index.css
export default SplashScreen;
