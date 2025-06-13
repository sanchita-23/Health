import React, { useState } from 'react';

const CaregiverAppointments = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            patientName: 'Albert Young',
            date: '2025-06-15',
            time: '2:00 PM',
            status: 'Pending'
        },
        {
            id: 2,
            patientName: 'Jennifer Chen',
            date: '2025-06-17',
            time: '10:30 AM',
            status: 'Pending'
        },
        {
            id: 3,
            patientName: 'Gary Wallace',
            date: '2025-06-20',
            time: '4:15 PM',
            status: 'Pending'
        }
    ]);

    const handleStatusChange = (id, newStatus) => {
        const updated = appointments.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        );
        setAppointments(updated);
    };

    const styles = {
        page: {
            padding: '40px',
            fontFamily: "'Nunito', sans-serif",
            background: 'linear-gradient(to right, #e0fdfd, #ffffff)',
            minHeight: '100vh',
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#009688',
            marginBottom: '30px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
        },
        th: {
            textAlign: 'left',
            padding: '16px',
            backgroundColor: '#e0f7fa',
            color: '#00695c',
            fontSize: '1rem',
        },
        td: {
            padding: '16px',
            borderTop: '1px solid #eee',
            fontSize: '0.95rem',
        },
        button: {
            marginRight: '10px',
            padding: '8px 14px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
        },
        accept: {
            backgroundColor: '#4caf50',
            color: '#fff',
        },
        reject: {
            backgroundColor: '#f44336',
            color: '#fff',
        },
        status: {
            fontWeight: '600',
        }
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Appointment Requests</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Patient</th>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Time</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(app => (
                        <tr key={app.id}>
                            <td style={styles.td}>{app.patientName}</td>
                            <td style={styles.td}>{app.date}</td>
                            <td style={styles.td}>{app.time}</td>
                            <td style={styles.td}>
                                <span style={{ ...styles.status, color: app.status === 'Accepted' ? 'green' : app.status === 'Rejected' ? 'red' : '#555' }}>
                                    {app.status}
                                </span>
                            </td>
                            <td style={styles.td}>
                                {app.status === 'Pending' && (
                                    <>
                                        <button
                                            style={{ ...styles.button, ...styles.accept }}
                                            onClick={() => handleStatusChange(app.id, 'Accepted')}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            style={{ ...styles.button, ...styles.reject }}
                                            onClick={() => handleStatusChange(app.id, 'Rejected')}
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                                {(app.status === 'Accepted' || app.status === 'Rejected') && (
                                    <span>—</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CaregiverAppointments;
