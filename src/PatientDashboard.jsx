import React, { useState } from 'react';
import {
  FaUserFriends, FaPills, FaComments, FaBell, FaUserCircle,
  FaCalendarAlt, FaExclamationTriangle, FaSignOutAlt, FaHeartbeat
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PatientProfile from './PatientProfile';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const assigned = JSON.parse(localStorage.getItem('assignedCaregiver'));
  const medReminders = JSON.parse(localStorage.getItem('medReminders')) || [];
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

  const handleLogout = () => {
    localStorage.removeItem('patientToken');
    localStorage.removeItem('patientEmail');
    localStorage.removeItem('assignedCaregiver');
    navigate('/login');
  };

  const handleDeleteReminder = (indexToDelete) => {
    const updated = medReminders.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('medReminders', JSON.stringify(updated));
    window.location.reload();
  };

  const handleDeleteAppointment = (indexToDelete) => {
    const updated = appointments.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('appointments', JSON.stringify(updated));
    window.location.reload();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div style={{ padding: '20px', background: 'linear-gradient(to right, #e0f7fa, #ffffff)', minHeight: '100vh' }}>
            <h2 style={{ marginBottom: '20px' }}>Patient Dashboard</h2>

            {/* Assigned Caregiver */}
            {assigned ? (
              <div style={cardStyle}>
                <h3>Assigned Caregiver</h3>
                <p><strong>Name:</strong> {assigned.name}</p>
                <p><strong>Specialty:</strong> {assigned.specialty}</p>
                <p><strong>Rating:</strong> ⭐ {assigned.rating}</p>
              </div>
            ) : (
              <div style={cardStyle}>
                <h3>No Caregiver Selected</h3>
                <p>Select your caregiver from <strong>Search Caregiver</strong>.</p>
              </div>
            )}

            {/* Medication Reminders */}
            <div style={cardStyle}>
              <h3>Medication Reminders</h3>
              {medReminders.length === 0 ? (
                <p>Set your reminder so you will not forget your medications.</p>
              ) : (
                medReminders.map((reminder, index) => (
                  <div key={index} style={{ marginBottom: '10px', position: 'relative' }}>
                    <p><strong>{reminder.name}</strong> ({reminder.type})</p>
                    <p>Time: {reminder.time1} {reminder.time2 && `& ${reminder.time2}`}</p>
                    <p>Dose: {reminder.dose || 'N/A'}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                      <button onClick={() => handleDeleteReminder(index)} style={smallButtonStyle}>🗑 Delete</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Upcoming Appointments */}
            <div style={cardStyle}>
              <h3>Upcoming Appointments</h3>
              {appointments.length === 0 ? (
                <p>You don’t have any appointments yet.</p>
              ) : (
                appointments.map((appt, index) => (
                  <div key={index} style={{ marginBottom: '10px', position: 'relative' }}>
                    <p><strong>Caregiver:</strong> {appt.caregiver}</p>
                    <p><strong>Date:</strong> {appt.date}</p>
                    <p><strong>Time:</strong> {appt.time}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                      <button onClick={() => handleDeleteAppointment(index)} style={smallButtonStyle}>🗑 Delete</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Feature Cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
              <div style={cardStyle}>
                <h3>Caregiver Selection</h3>
                <p>Search and connect with nearby caregivers.</p>
                <button style={buttonStyle} onClick={() => navigate('/caregivers')}>
                  Search Caregivers
                </button>
              </div>
              <div style={cardStyle}>
                <h3>View Calendar</h3>
                <p>Book, view and manage appointments.</p>
                <button style={buttonStyle} onClick={() => navigate('/calendar')}>
                  View Calendar
                </button>
              </div>
              <div style={cardStyle}>
                <h3>Manage Reminders</h3>
                <p>Add or update medication reminders.</p>
                <button style={buttonStyle} onClick={() => navigate('/reminders')}>
                  Manage Reminders
                </button>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return <PatientProfile />;

      default:
        return <div style={{ padding: '20px' }}><p>Coming soon...</p></div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px', background: '#1c1c1c', color: '#fff', padding: '20px',
        display: 'flex', flexDirection: 'column', gap: '20px'
      }}>
        <h2>Smart Diet App</h2>
        <div onClick={() => setActiveTab('dashboard')} style={navItemStyle}><FaHeartbeat /> Dashboard</div>
        <div onClick={() => setActiveTab('profile')} style={navItemStyle}><FaUserCircle /> Profile</div>
        <div onClick={() => navigate('/calendar')} style={navItemStyle}><FaCalendarAlt /> Appointments</div>
        <div onClick={() => navigate('/reminders')} style={navItemStyle}><FaPills /> Reminders</div>
        <div onClick={() => navigate('/notifications')} style={navItemStyle}><FaBell /> Notifications</div>
        <div onClick={() => navigate('/payment')} style={navItemStyle}><FaExclamationTriangle /> Subscription</div>
        <div onClick={() => navigate('/support')} style={navItemStyle}><FaComments /> Support</div>
        <div onClick={handleLogout} style={navItemStyle}><FaSignOutAlt /> Logout</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: '#f2f2f2' }}>
        {renderContent()}
      </div>
    </div>
  );
};

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: '#2e2e2e',
  transition: 'background 0.2s ease'
};

const cardStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  flex: '1',
  minWidth: '250px'
};

const buttonStyle = {
  marginTop: '10px',
  padding: '8px 12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  cursor: 'pointer'
};

const smallButtonStyle = {
  padding: '4px 10px',
  backgroundColor: '#f44336',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '12px'
};

export default PatientDashboard;
