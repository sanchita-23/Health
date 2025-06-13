import React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationsPage = () => {
    const notifications = [
        { id: 1, message: "New appointment request from Albert Young." },
        { id: 2, message: "Reminder: Follow-up with Jennifer Chen at 4PM." },
        { id: 3, message: "System update completed successfully." },
    ];

    const styles = {
        page: {
            padding: '40px',
            fontFamily: "'Poppins', sans-serif",
        },
        title: {
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            color: '#009688',
        },
        card: {
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
            marginBottom: '15px',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.title}><FaBell /> Notifications</div>
            {notifications.map((note) => (
                <div key={note.id} style={styles.card}>
                    {note.message}
                </div>
            ))}
        </div>
    );
};

export default NotificationsPage;
