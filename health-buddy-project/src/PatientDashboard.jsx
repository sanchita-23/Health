import React from 'react';

const PatientDashboard = () => {
    return (
        <div style={styles.page}>
            <h2 style={styles.header}>Patient Dashboard</h2>

            <div style={styles.grid}>
                {/* Caregiver Selection */}
                <div style={styles.card}>
                    <h3>Caregiver Selection</h3>
                    <p>Search and connect with nearby caregivers.</p>
                    <button style={styles.button}>Search Caregivers</button>
                </div>

                {/* Medication Reminders */}
                <div style={styles.card}>
                    <h3>Medication Reminders</h3>
                    <p>You have 3 reminders set for today.</p>
                    <button style={styles.button}>Manage Reminders</button>
                </div>

                {/* Chat / Video Call */}
                <div style={styles.card}>
                    <h3>Chat / Video Call</h3>
                    <p>Connect with your assigned caregiver instantly.</p>
                    <button style={styles.button}>Open Chat</button>
                </div>

                {/* SOS Button */}
                <div style={{ ...styles.card, background: '#ffeaea' }}>
                    <h3 style={{ color: '#d32f2f' }}>Emergency SOS</h3>
                    <p>If you need urgent help, press the button below.</p>
                    <button style={{ ...styles.button, backgroundColor: '#d32f2f' }}>Send SOS</button>
                </div>

                {/* Appointment Calendar */}
                <div style={styles.card}>
                    <h3>Appointment Calendar</h3>
                    <p>View and manage your upcoming appointments.</p>
                    <button style={styles.button}>View Calendar</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        fontFamily: 'Poppins, sans-serif',
        background: '#f5f7fa',
        minHeight: '100vh',
        padding: '30px',
    },
    header: {
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    },
    button: {
        marginTop: '10px',
        padding: '10px 16px',
        backgroundColor: '#26a69a',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
    },
};

export default PatientDashboard;