import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaInfoCircle, FaBell } from 'react-icons/fa';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const reminders = JSON.parse(localStorage.getItem('medReminders')) || [];
    const subscriptionStatus = localStorage.getItem('subscriptionStatus'); // string message

    const notifList = [];

    // Appointments
    appointments.forEach(appt => {
      notifList.push({
        type: 'appointment',
        message: `Appointment booked with ${appt.caregiver} on ${appt.date} at ${appt.time}.`
      });
    });

    // Medication Reminders
    reminders.forEach(rem => {
      notifList.push({
        type: 'reminder',
        message: `Medication reminder set for ${rem.name} at ${rem.time1}${rem.time2 ? ` and ${rem.time2}` : ''}.`
      });
    });

    // Subscription
    if (subscriptionStatus) {
      notifList.push({
        type: 'info',
        message: subscriptionStatus
      });
    }

    setNotifications(notifList);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'appointment':
        return <FaCalendarAlt color="#2e7df5" />;
      case 'reminder':
        return <FaBell color="#ffa500" />;
      case 'info':
      default:
        return <FaInfoCircle color="#2ecc71" />;
    }
  };

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'sans-serif',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        notifications.map((n, index) => (
          <div key={index} style={{
            background: '#fff',
            padding: '15px 20px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '15px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
          }}>
            {getIcon(n.type)}
            <span>{n.message}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationsPage;
