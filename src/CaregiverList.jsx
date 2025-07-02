import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaregiverList = () => {
  const navigate = useNavigate();

  const caregivers = [
    { name: 'Dr. Sarah Collins', specialty: 'Geriatric Care', rating: 4.8 },
    { name: 'Nurse John Smith', specialty: 'Post-Surgery Recovery', rating: 4.5 },
    { name: 'Dr. Amanda White', specialty: 'Pediatric Support', rating: 4.9 },
    { name: 'Dr. Emily Stone', specialty: 'Oncology Care', rating: 4.7 },
    { name: 'Nurse Robert Lee', specialty: 'Cardiac Rehab', rating: 4.6 },
    { name: 'Dr. Lisa Taylor', specialty: 'Neurological Support', rating: 4.8 },
    { name: 'Nurse James Patel', specialty: 'Elderly Assistance', rating: 4.4 },
    { name: 'Dr. Olivia Brown', specialty: 'Postpartum Care', rating: 4.9 },
    { name: 'Nurse Ethan Green', specialty: 'Wound Management', rating: 4.3 },
    { name: 'Dr. Priya Shah', specialty: 'Chronic Disease Care', rating: 4.7 },
    { name: 'Nurse Daniel Cooper', specialty: 'Mobility Support', rating: 4.6 },
    { name: 'Dr. Chloe Adams', specialty: 'Home Hospice', rating: 4.9 },
    { name: 'Nurse Kevin Brooks', specialty: 'Emergency Support', rating: 4.2 },
    { name: 'Dr. Rachel Kim', specialty: 'Post-Surgical Monitoring', rating: 4.5 },
    { name: 'Nurse Henry Davis', specialty: 'Orthopedic Recovery', rating: 4.4 },
    { name: 'Dr. Natalie Singh', specialty: 'Diabetes Management', rating: 4.8 },
    { name: 'Nurse Jason Clark', specialty: 'Respiratory Therapy', rating: 4.3 },
    { name: 'Dr. Megan Lewis', specialty: 'Mental Health Support', rating: 4.6 },
    { name: 'Nurse William Harris', specialty: 'General Home Care', rating: 4.5 },
    { name: 'Dr. Zoe Martinez', specialty: 'Nutrition & Wellness', rating: 4.9 }
  ];

  const handleAssign = (caregiver) => {
    localStorage.setItem('assignedCaregiver', JSON.stringify(caregiver));
    alert(`${caregiver.name} has been assigned!`);
    navigate('/patient-dashboard');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Available Caregivers</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {caregivers.map((c, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3>{c.name}</h3>
              <p><strong>Specialty:</strong> {c.specialty}</p>
              <p><strong>Rating:</strong> ⭐ {c.rating}</p>
            </div>
            <button
              onClick={() => handleAssign(c)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#038f84',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
              Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverList;
