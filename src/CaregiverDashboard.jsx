import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    FaUserFriends, FaCalendarAlt, FaBell, FaUserCircle,
    FaCreditCard, FaQuestionCircle, FaVideo,
    FaUpload, FaDollarSign, FaStar
} from 'react-icons/fa';

const CaregiverDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || 'User';
    const [activeTab, setActiveTab] = useState('dashboard');
    const [rate, setRate] = useState(35.00);

    const handleUpdateRate = () => {
        const newRate = prompt("Enter new hourly rate ($):", rate);
        if (newRate && !isNaN(newRate)) {
            setRate(parseFloat(newRate).toFixed(2));
            alert("Rate updated.");
        } else if (newRate !== null) {
            alert("Invalid input.");
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) alert(`Uploaded: ${file.name}`);
    };

    const handleStartSession = () => alert("Starting secure session...");

    const styles = {
       
            page: {
                display: 'flex',
                minHeight: '100vh',
                fontFamily: "'Poppins', sans-serif",
                backgroundImage: `url('/medical.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
              },
        
        sidebar: {
            width: '260px',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '30px 20px',
            boxShadow: '5px 0 20px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
        },
        sidebarTitle: {
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#009688',
            textAlign: 'center',
            marginBottom: '40px',
        },
        navItem: (tab) => ({
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            margin: '10px 0',
            borderRadius: '12px',
            backgroundColor: activeTab === tab ? '#e0f7fa' : 'transparent',
            color: activeTab === tab ? '#00796b' : '#333',
            fontWeight: activeTab === tab ? '700' : '500',
            cursor: 'pointer',
            transition: '0.3s',
        }),
        icon: { marginRight: '12px' },
        content: {
            flex: 1,
            padding: '40px',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
        },
        greeting: {
            fontSize: '1.7rem',
            fontWeight: '600',
        },
        subGreeting: {
            color: '#555',
            fontSize: '1rem',
        },
        profile: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        avatar: {
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#ddd',
        },
        kpiGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
        },
        kpiCard: {
            padding: '20px',
            background: '#ffffff',
            borderRadius: '14px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
            textAlign: 'center',
            transition: '0.3s',
        },
        kpiNumber: {
            fontSize: '1.6rem',
            fontWeight: '700',
            color: '#009688',
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
        },
        card: {
            background: '#ffffff',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: '0.3s',
            cursor: 'pointer',
        },
        cardTitle: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#00796b',
        },
        button: {
            marginTop: '10px',
            padding: '10px 15px',
            backgroundColor: '#009688',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.page}>
            {/* Sidebar */}
            <aside style={styles.sidebar}>
                <div style={styles.sidebarTitle}>Health Buddy</div>

                <div style={styles.navItem('dashboard')} onClick={() => { setActiveTab('dashboard'); navigate('/caregiver-dashboard'); }}>
                    <FaUserFriends style={styles.icon} /> Dashboard
                </div>

                <div style={styles.navItem('appointments')} onClick={() => { setActiveTab('appointments'); navigate('/appointments'); }}>
                    <FaCalendarAlt style={styles.icon} /> Appointments
                </div>

                <div style={styles.navItem('notifications')} onClick={() => { setActiveTab('notifications'); navigate('/notifications'); }}>
                    <FaBell style={styles.icon} /> Notifications
                </div>

                <div style={styles.navItem('profile')} onClick={() => { setActiveTab('profile'); navigate('/profile'); }}>
                    <FaUserCircle style={styles.icon} /> Profile
                </div>

                <div style={styles.navItem('subscription')} onClick={() => { setActiveTab('subscription'); navigate('/subscription'); }}>
                    <FaCreditCard style={styles.icon} /> Subscription
                </div>

                <div style={styles.navItem('support')} onClick={() => { setActiveTab('support'); navigate('/support'); }}>
                    <FaQuestionCircle style={styles.icon} /> Support
                </div>
            </aside>


            {/* Main content */}
            <main style={styles.content}>
                <div style={styles.header}>
                    <div>
                        <div style={styles.greeting}>Welcome, {username} 👋</div>
                        <div style={styles.subGreeting}>Let's care together today</div>
                    </div>
                    <div style={styles.profile}>
                        <FaBell size={20} />
                        <img src="/search.png" alt="Profile" style={styles.avatar} />
                    </div>
                </div>

                {/* KPIs */}
                <div style={styles.kpiGrid}>
                    <div style={styles.kpiCard}>
                        <div>Total Patients</div>
                        <div style={styles.kpiNumber}>3</div>
                    </div>
                    <div style={styles.kpiCard}>
                        <div>Today's Appointments</div>
                        <div style={styles.kpiNumber}>1</div>
                    </div>
                    <div style={styles.kpiCard}>
                        <div>Rating</div>
                        <div style={styles.kpiNumber}><FaStar color="gold" /> 4.8</div>
                    </div>
                </div>

                {/* Functional Cards */}
                <div style={styles.cardGrid}>
                    <div style={styles.card} onClick={() => alert('View Assigned Patients')}>
                        <div style={styles.cardTitle}><FaUserFriends /> Assigned Patients</div>
                        <ul>
                            <li>Albert Young – $25/hr</li>
                            <li>Jennifer Chen – $30/hr</li>
                            <li>Gary Wallace – $28/hr</li>
                        </ul>
                    </div>

                    <div style={styles.card} onClick={() => navigate('/appointments')}>
                        <div style={styles.cardTitle}><FaCalendarAlt /> Upcoming Appointments</div>
                        <p>June 21 – 2:00 PM with Albert Young</p>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.cardTitle}><FaUpload /> Upload Observations</div>
                        <input type="file" onChange={handleFileUpload} />
                    </div>

                    <div style={styles.card}>
                        <div style={styles.cardTitle}><FaVideo /> Start Video Call</div>
                        <button style={styles.button} onClick={handleStartSession}>Start Session</button>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.cardTitle}><FaDollarSign /> Hourly Rate</div>
                        <p>Current Rate: <strong>${rate}</strong></p>
                        <button style={styles.button} onClick={handleUpdateRate}>Update Rate</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CaregiverDashboard;
