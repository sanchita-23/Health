import React from 'react';

const PatientProfile = () => {
    // Sample patient data (can be fetched from backend later)
    const patient = {
        name: 'Surekha Jaidka',
        email: 'surekha@example.com',
        phone: '+1 234 567 8901',
        age: 28,
        gender: 'Female',
        address: '123 Main St, Vancouver, BC',
        condition: 'Diabetes Type 2',
        allergies: 'Peanuts, Dairy',
        image: 'https://via.placeholder.com/120' // Replace with real profile URL
    };

    return (
        <div style={{ padding: '30px' }}>
            <h2>Patient Profile</h2>
            <div style={{
                display: 'flex',
                gap: '30px',
                alignItems: 'flex-start',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                maxWidth: '800px'
            }}>
                <img
                    src={patient.image}
                    alt="Profile"
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
                <div>
                    <p><strong>Name:</strong> {patient.name}</p>
                    <p><strong>Email:</strong> {patient.email}</p>
                    <p><strong>Phone:</strong> {patient.phone}</p>
                    <p><strong>Age:</strong> {patient.age}</p>
                    <p><strong>Gender:</strong> {patient.gender}</p>
                    <p><strong>Address:</strong> {patient.address}</p>
                    <p><strong>Condition:</strong> {patient.condition}</p>
                    <p><strong>Allergies:</strong> {patient.allergies}</p>
                    <button style={{
                        marginTop: '12px',
                        padding: '10px 18px',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: '#038f84',
                        color: '#fff',
                        cursor: 'pointer'
                    }}>Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;