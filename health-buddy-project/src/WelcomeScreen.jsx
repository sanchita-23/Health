import React from 'react';

const WelcomeScreen = () => {
    return (
        <div style={styles.container}>
            <img src="/HEALTH.png" alt="Logo" style={styles.icon} />
            <h1 style={styles.title}>Health Buddy</h1>
            <h2 style={styles.welcome}>Welcome</h2>
            <button style={styles.button}>Log In</button>
            <button style={styles.button}>Sign Up</button>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: '80px',
        height: '80px',
        marginBottom: '20px'
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: '1.5rem',
        margin: '20px 0'
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        margin: '10px',
        borderRadius: '8px',
        border: '1px solid gray',
        backgroundColor: 'white',
        cursor: 'pointer'
    }
};

export default WelcomeScreen;
