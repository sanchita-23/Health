import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelpSupport = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'FAQs', icon: '❓', path: '/help/faqs' },
        { label: 'Contact Support', icon: '📧', path: '/help/contact' },
        { label: 'Chatbot', icon: '🤖', path: '/help/chatbot' },
        { label: 'Report a Problem', icon: '📝', path: '/help/report' }
    ];

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Help & Support</h2>

                {items.map((item, index) => (
                    <div key={index} style={styles.row} onClick={() => navigate(item.path)}>
                        <span style={styles.icon}>{item.icon}</span>
                        <span style={styles.text}>{item.label}</span>
                        <span style={styles.arrow}>›</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        background: '#f8f9fb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        padding: '30px 20px',
    },
    heading: {
        fontSize: '1.6rem',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#122A43',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        padding: '14px 10px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        transition: '0.2s',
    },
    icon: {
        fontSize: '1.3rem',
        marginRight: '12px',
    },
    text: {
        flex: 1,
        fontSize: '1rem',
        color: '#333',
    },
    arrow: {
        fontSize: '1.2rem',
        color: '#999',
    },
};

export default HelpSupport;
