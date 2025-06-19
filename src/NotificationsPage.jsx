import React from 'react';
import { FaBell, FaCalendarCheck, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';

const NotificationsPage = () => {
    const notifications = [
        {
            id: 1,
            type: 'appointment',
            message: 'New appointment request from Albert Young.',
        },
        {
            id: 2,
            type: 'reminder',
            message: 'Reminder: Follow-up with Jennifer Chen at 4PM.',
        },
        {
            id: 3,
            type: 'system',
            message: 'System update completed successfully.',
        },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'appointment':
                return <FaCalendarCheck style={{ color: '#2196f3' }} />;
            case 'reminder':
                return <FaExclamationCircle style={{ color: '#ff9800' }} />;
            case 'system':
                return <FaInfoCircle style={{ color: '#4caf50' }} />;
            default:
                return <FaBell style={{ color: '#999' }} />;
        }
    };

    const styles = {
        page: {
            padding: '40px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: '#f7f9fb',
            minHeight: '100vh',
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '30px',
            color: '#00695c',
        },
        card: {
            background: '#ffffff',
            padding: '20px',
            borderRadius: '14px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: '0.3s',
        },
        message: {
            fontSize: '1.05rem',
            color: '#333',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.title}><FaBell /> Notifications</div>
            {notifications.map((note) => (
                <div key={note.id} style={styles.card}>
                    {getIcon(note.type)}
                    <span style={styles.message}>{note.message}</span>
                </div>
            ))}
        </div>
    );
};

export default NotificationsPage;
