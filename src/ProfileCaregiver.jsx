import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfileCaregiver = () => {
    const caregiver = {
        name: "Surekha Jaidka",
        email: "surekha@example.com",
        profession: "Registered Dietitian",
        experience: "5 years",
        area: "Vancouver, BC",
    };

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
            padding: '30px',
            borderRadius: '14px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            maxWidth: '400px',
        },
        label: {
            fontWeight: '600',
            marginTop: '12px',
            color: '#555',
        },
        value: {
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.title}><FaUserCircle /> Profile</div>
            <div style={styles.card}>
                <div style={styles.label}>Name</div>
                <div style={styles.value}>{caregiver.name}</div>
                <div style={styles.label}>Email</div>
                <div style={styles.value}>{caregiver.email}</div>
                <div style={styles.label}>Profession</div>
                <div style={styles.value}>{caregiver.profession}</div>
                <div style={styles.label}>Experience</div>
                <div style={styles.value}>{caregiver.experience}</div>
                <div style={styles.label}>Service Area</div>
                <div style={styles.value}>{caregiver.area}</div>
            </div>
        </div>
    );
};

export default ProfileCaregiver;
