import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    FaUserFriends, FaCalendarAlt, FaBell, FaUserCircle,
    FaCreditCard, FaQuestionCircle, FaVideo,
    FaUpload, FaDollarSign, FaStar, FaSearch, FaSignOutAlt
} from 'react-icons/fa';

const CaregiverDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || 'User';
    const email = location.state?.email || '';
    
    const [activeTab, setActiveTab] = useState('dashboard');
    const [rate, setRate] = useState(0);
    const [caregiverId, setCaregiverId] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const assignedPatients = [
        { name: 'Albert Young', rate: '$25/hr' },
        { name: 'Jennifer Chen', rate: '$30/hr' },
        { name: 'Gary Wallace', rate: '$28/hr' },
    ];

    const notifications = [
        "New appointment request from Albert Young.",
        "Reminder: Follow-up with Jennifer Chen at 4PM.",
        "System update completed successfully.",
    ];

    // ✅ Fetch caregiver ID and hourly rate on mount
    useEffect(() => {
        const fetchCaregiver = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/auth/caregiver-by-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: location.state?.email }),
                });
                const data = await res.json();
                if (data && data._id) {
                    setCaregiverId(data._id);  // SETS the id
                    setRate(data.hourlyRate ? parseFloat(data.hourlyRate).toFixed(2) : "0.00");
                }
            } catch (err) {
                console.error('Error fetching caregiver:', err);
            }
        };
    
        fetchCaregiver();
    }, [location.state?.email]);
    
    


    // ✅ Save updated rate to backend
    const updateRateInBackend = async (newRate) => {
    try {
        console.log('caregiverId:', caregiverId); 
        await fetch(`http://localhost:5000/api/dashboard/update-rate/${caregiverId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate: newRate }),
        });
    } catch (error) {
        console.error('Failed to update rate in backend:', error);
    }
};


    // ✅ Rate update handler
    const handleUpdateRate = async () => {
        const newRate = prompt("Enter new hourly rate ($):", rate);
        if (newRate && !isNaN(newRate)) {
            const formattedRate = parseFloat(newRate).toFixed(2);
            setRate(formattedRate);
            await updateRateInBackend(formattedRate);
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

    const handleSearch = () => {
        const result = assignedPatients.find(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(result || 'Not found');
    };

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
            padding: '30px 24px',
            boxShadow: '5px 0 20px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
        },
        sidebarTitle: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#009688',
            textAlign: 'center',
            marginBottom: '30px',
        },
        navItem: (tab) => ({
            display: 'flex',
            alignItems: 'center',
            padding: '14px 18px',
            marginBottom: '16px',
            borderRadius: '10px',
            backgroundColor: activeTab === tab ? '#e0f7fa' : 'transparent',
            color: activeTab === tab ? '#00796b' : '#333',
            fontWeight: activeTab === tab ? '600' : '500',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            gap: '12px',
        }),
        icon: { marginRight: '12px' },
        content: { flex: 1, padding: '40px', position: 'relative' },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
        },
        greeting: { fontSize: '1.7rem', fontWeight: '600' },
        subGreeting: { color: '#555', fontSize: '1rem' },
        profile: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            position: 'relative',
        },
        iconButton: {
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '50%',
            padding: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: '0.2s',
        },
        profileWrap: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        profileImage: {
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '2px solid #26a69a',
            objectFit: 'cover',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            cursor: 'pointer',
        },
        logoutText: {
            color: '#00796b',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.95rem',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: '#e0f2f1',
            borderRadius: '6px',
        },
        dropdown: {
            position: 'absolute',
            top: '50px',
            right: 0,
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0,0,0,0.15)',
            padding: '15px',
            zIndex: 10,
            width: '280px',
        },
        input: {
            padding: '8px',
            width: '100%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
        },
        searchBtn: {
            backgroundColor: '#26a69a',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
        },
        kpiGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
        },
        kpiCard: {
            padding: '24px',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 24px rgba(0,0,0,0.05)',
            textAlign: 'center',
            border: '1px solid #e8f5e9',
        },
        kpiNumber: {
            fontSize: '2rem',
            fontWeight: '800',
            color: '#009688',
            marginTop: '10px',
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
        },
        card: {
            background: '#ffffff',
            padding: '24px',
            borderRadius: '18px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textAlign: 'left',
            border: '1px solid #f0f0f0',
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
            <aside style={styles.sidebar}>
                <div style={styles.sidebarTitle}>Health Buddy</div>
                {[
                    { label: 'dashboard', icon: <FaUserFriends />, path: '/caregiver-dashboard' },
                    { label: 'appointments', icon: <FaCalendarAlt />, path: '/appointments' },
                    { label: 'notifications', icon: <FaBell />, path: '/notifications' },
                    { label: 'profile', icon: <FaUserCircle />, path: '/profile' },
                    { label: 'subscription', icon: <FaCreditCard />, path: '/subscription' },
                    { label: 'support', icon: <FaQuestionCircle />, path: '/support' },
                ].map(item => (
                    <div key={item.label} style={styles.navItem(item.label)} onClick={() => { setActiveTab(item.label); navigate(item.path); }}>
                        {item.icon} {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                    </div>
                ))}
            </aside>

            <main style={styles.content}>
                <div style={styles.header}>
                    <div>
                        <div style={styles.greeting}>Welcome, {username} 👋</div>
                        <div style={styles.subGreeting}>Let's care together today</div>
                    </div>

                    <div style={styles.profile}>
                        <button style={styles.iconButton} onClick={() => setShowSearch(prev => !prev)}><FaSearch /></button>
                        <button style={styles.iconButton} onClick={() => setShowNotifications(prev => !prev)}><FaBell /></button>
                        <div style={styles.profileWrap}>
                            <img src="image.png" alt="Profile" style={styles.profileImage} />
                            <div style={styles.logoutText} onClick={() => navigate('/')}><FaSignOutAlt /> Logout</div>
                        </div>

                        {showSearch && (
                            <div style={styles.dropdown}>
                                <input type="text" placeholder="Search patient..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={styles.input} />
                                <button onClick={handleSearch} style={styles.searchBtn}>Search</button>
                                {searchResult && (
                                    <div style={{ marginTop: '10px' }}>
                                        {typeof searchResult === 'string'
                                            ? searchResult
                                            : `Found: ${searchResult.name} – ${searchResult.rate}`}
                                    </div>
                                )}
                            </div>
                        )}

                        {showNotifications && (
                            <div style={styles.dropdown}>
                                <h4 style={{ color: '#00796B', marginBottom: '10px' }}>Notifications</h4>
                                <ul style={{ paddingLeft: '20px' }}>
                                    {notifications.map((note, i) => (
                                        <li key={i} style={{ marginBottom: '8px' }}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div style={styles.kpiGrid}>
                    <div style={styles.kpiCard}><div>Total Patients</div><div style={styles.kpiNumber}>3</div></div>
                    <div style={styles.kpiCard}><div>Today's Appointments</div><div style={styles.kpiNumber}>1</div></div>
                    <div style={styles.kpiCard}><div>Rating</div><div style={styles.kpiNumber}><FaStar color="gold" /> 4.8</div></div>
                </div>

                <div style={styles.cardGrid}>
                    <div style={styles.card}><div style={styles.cardTitle}><FaUserFriends /> Assigned Patients</div><ul>{assignedPatients.map((p, i) => (<li key={i}>{p.name} – {p.rate}</li>))}</ul></div>
                    <div style={styles.card} onClick={() => navigate('/appointments')}><div style={styles.cardTitle}><FaCalendarAlt /> Upcoming Appointments</div><p>June 21 – 2:00 PM with Albert Young</p></div>
                    <div style={styles.card}><div style={styles.cardTitle}><FaUpload /> Upload Observations</div><input type="file" onChange={handleFileUpload} /></div>
                    <div style={styles.card}><div style={styles.cardTitle}><FaVideo /> Start Video Call</div><button style={styles.button} onClick={handleStartSession}>Start Session</button></div>
                    <div style={styles.card}><div style={styles.cardTitle}><FaDollarSign /> Hourly Rate</div><p>Current Rate: <strong>${rate}</strong></p><button style={styles.button} onClick={handleUpdateRate}>Update Rate</button></div>
                </div>
            </main>
        </div>
    );
};

export default CaregiverDashboard;
