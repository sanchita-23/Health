import React from 'react';
import { useLocation } from 'react-router-dom';

const PatientDashboard = () => {
    const location = useLocation();
    const username = location.state?.username || 'Patient';

    const mealPlan = [
        { day: 'Monday', meals: { breakfast: 'Oatmeal & fruit', lunch: 'Grilled chicken salad', dinner: 'Veggie stir-fry' } },
        { day: 'Tuesday', meals: { breakfast: 'Greek yogurt & granola', lunch: 'Quinoa bowl', dinner: 'Baked salmon & broccoli' } },
    ];

    const medications = [
        { time: '8:00 AM', name: 'Metformin 500mg', taken: false },
        { time: '6:00 PM', name: 'Vitamin D', taken: false },
    ];

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Welcome, {username} 👋</h1>
                <p style={styles.subtitle}>Your Personalized Dashboard</p>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>🥗 Weekly Meal Plan</h2>
                    {mealPlan.map((item, index) => (
                        <div key={index} style={styles.box}>
                            <h3>{item.day}</h3>
                            <p><strong>Breakfast:</strong> {item.meals.breakfast}</p>
                            <p><strong>Lunch:</strong> {item.meals.lunch}</p>
                            <p><strong>Dinner:</strong> {item.meals.dinner}</p>
                        </div>
                    ))}
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>💊 Medication Reminders</h2>
                    {medications.map((med, index) => (
                        <div key={index} style={styles.medBox}>
                            <p><strong>{med.time}</strong> — {med.name}</p>
                            <button style={styles.markBtn}>Mark as Taken</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0f7fa, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        paddingTop: '40px',
        fontFamily: "'Poppins', sans-serif",
    },
    card: {
        background: '#fff',
        padding: '30px',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '960px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    },
    title: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '25px',
    },
    section: {
        marginBottom: '40px',
    },
    sectionTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '15px',
        color: '#00897b',
    },
    box: {
        backgroundColor: '#f1fdfc',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
    },
    medBox: {
        backgroundColor: '#fff8e1',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
    },
    markBtn: {
        backgroundColor: '#26a69a',
        color: '#fff',
        padding: '6px 12px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
    },
};

export default PatientDashboard;
