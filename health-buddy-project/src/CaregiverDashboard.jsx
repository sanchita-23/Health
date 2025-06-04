import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    FaUserFriends, FaCalendarAlt, FaBell, FaUserCircle,
    FaCreditCard, FaQuestionCircle, FaNotesMedical, FaVideo,
    FaUpload, FaDollarSign
} from 'react-icons/fa';

const CaregiverDashboard = () => {
    const location = useLocation();
    const username = location.state?.username || 'User';
    const [rate, setRate] = useState(35.00);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            alert(`Uploaded "${file.name}"`);
        }
    };

    const handleUpdateRate = () => {
        const newRate = prompt("Enter new hourly rate ($):", rate);
        if (newRate && !isNaN(newRate)) {
            setRate(parseFloat(newRate).toFixed(2));
            alert("Rate updated.");
        } else if (newRate !== null) {
            alert("Invalid input.");
        }
    };

    const handleStartSession = () => {
        alert("Starting secure session...");
    };

    const styles = {
        page: {
            display: 'flex',
            minHeight: '100vh',
            fontFamily: "'Segoe UI', sans-serif",
            background: 'linear-gradient(135deg, #e0f7fa, #f9f9f9)',
        },
        sidebar: {
            width: '240px',
            background: '#ffffff',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            padding: '30px 20px',
            boxShadow: '5px 0 10px rgba(0,0,0,0.05)',
        },
        sidebarTitle: {
            fontSize: '1.7rem',
            fontWeight: 'bold',
            color: '#00897b',
            marginBottom: '40px',
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '10px',
            transition: '0.3s',
            cursor: 'pointer',
            color: '#333',
        },
        navItemHover: {
            background: '#e0f2f1',
        },
        icon: {
            marginRight: '12px',
        },
        content: {
            flexGrow: 1,
            padding: '40px',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
        },
        greeting: {
            fontSize: '1.8rem',
            fontWeight: '600',
        },
        subGreeting: {
            fontSize: '1rem',
            color: '#555',
            marginTop: '5px',
        },
        searchProfile: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        search: {
            padding: '10px 14px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            fontSize: '0.9rem',
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
        },
        card: {
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            transition: '0.3s',
        },
        cardTitle: {
            fontWeight: '600',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
            color: '#009688',
        },
        button: {
            padding: '10px 15px',
            backgroundColor: '#009688',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
        },
        buttonHover: {
            backgroundColor: '#00796b',
        },
    };

    return (
        <div style={styles.page}>
            {/* Sidebar */}
            <aside style={styles.sidebar}>
                <div style={styles.sidebarTitle}>Health Buddy</div>
                <div style={styles.navItem}><FaUserFriends style={styles.icon} /> Dashboard</div>
                <div style={styles.navItem}><FaCalendarAlt style={styles.icon} /> Appointments</div>
                <div style={styles.navItem}><FaBell style={styles.icon} /> Notifications</div>
                <div style={styles.navItem}><FaUserCircle style={styles.icon} /> Profile</div>
                <div style={styles.navItem}><FaCreditCard style={styles.icon} /> Subscription</div>
                <div style={styles.navItem}><FaQuestionCircle style={styles.icon} /> Support</div>
            </aside>

            {/* Main content */}
            <main style={styles.content}>
                <div style={styles.header}>
                    <div>
                        <div style={styles.greeting}>Welcome, {username} 👋</div>
                        <div style={styles.subGreeting}>Good afternoon, hope you are doing well.</div>
                    </div>
                    <div style={styles.searchProfile}>
                        <input type="text" placeholder="Search..." style={styles.search} />
                        <FaUserCircle size={28} />
                    </div>
                </div>

                <div style={styles.cardGrid}>
                    <div style={styles.card}>
                        <div style={styles.cardTitle}><FaUserFriends /> Assigned Patients</div>
                        <ul>
                            <li>Albert Young – $25/hr</li>
                            <li>Jennifer Chen – $30/hr</li>
                            <li>Gary Wallace – $28/hr</li>
                        </ul>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.cardTitle}><FaCalendarAlt /> Upcoming Appointments</div>
                        <p>Sep 21 – 2:00 PM with Albert Young</p>
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
