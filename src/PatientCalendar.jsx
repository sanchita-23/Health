import React, { useState, useEffect } from 'react';

const defaultCaregivers = [
  { name: 'Dr. Sarah Patel', specialty: 'Nutrition' },
  { name: 'Dr. James Lee', specialty: 'Diabetes' },
  { name: 'Dr. Aisha Khan', specialty: 'Cardiology' },
  { name: 'Dr. Miguel Torres', specialty: 'Mental Health' },
  { name: 'Dr. Emily Chen', specialty: 'Digestive Health' },
  { name: 'Dr. Raj Mehta', specialty: 'Weight Loss' },
  { name: 'Dr. Olivia Stone', specialty: 'Rehabilitation' },
  { name: 'Dr. Leo Kim', specialty: 'Hypertension' },
  { name: 'Dr. Hana Suzuki', specialty: 'Pediatrics' },
  { name: 'Dr. Omar Farouk', specialty: 'Fitness & Recovery' },
  { name: 'Dr. Maria Lopez', specialty: 'Cholesterol Management' },
  { name: 'Dr. Alan White', specialty: 'Thyroid Health' },
  { name: 'Dr. Nina Das', specialty: 'Holistic Medicine' },
  { name: 'Dr. Ethan Brown', specialty: 'Senior Wellness' },
  { name: 'Dr. Clara Nguyen', specialty: 'Gut Health' },
  { name: 'Dr. Ravi Sharma', specialty: 'Heart Health' },
  { name: 'Dr. Linda Green', specialty: 'PCOS & Women’s Health' },
  { name: 'Dr. Felix Huang', specialty: 'General Dietetics' },
  { name: 'Dr. Noor Zahra', specialty: 'Sports Nutrition' },
  { name: 'Dr. Jack Thomas', specialty: 'Allergy Support' }
];

const PatientCalendar = () => {
  const storedCaregivers = JSON.parse(localStorage.getItem('caregiverList')) || [];
  const caregivers = storedCaregivers.length > 0 ? storedCaregivers : defaultCaregivers;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCaregiver, setSelectedCaregiver] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(stored);
  }, []);

  const handleBook = () => {
    if (!selectedDate || !selectedCaregiver || !selectedTime) {
      alert('Please select date, caregiver, and time');
      return;
    }

    const newAppointment = {
      date: selectedDate,
      caregiver: selectedCaregiver.name,
      time: selectedTime
    };

    const updated = [...appointments, newAppointment];
    localStorage.setItem('appointments', JSON.stringify(updated));
    setAppointments(updated);
    alert('Appointment booked successfully!');
  };

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(to right, #f0f4f8, #ffffff)',
      minHeight: '100vh'
    }}>
      <h2 style={{ marginBottom: '30px' }}>Book Appointment</h2>

      {/* Date Picker */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Select Date:</strong></label><br />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Time Selector */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Select Time:</strong></label><br />
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        >
          <option value="">-- Select Time --</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
        </select>
      </div>

      {/* Caregiver List */}
      <p><strong>Select Caregiver:</strong></p>
      <div style={{
        maxHeight: '300px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
        background: '#fff',
        marginBottom: '30px'
      }}>
        {caregivers.map((cg, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <strong>{cg.name}</strong> – {cg.specialty}
            </div>
            <button
              onClick={() => setSelectedCaregiver(cg)}
              style={{
                padding: '6px 10px',
                backgroundColor: selectedCaregiver?.name === cg.name ? '#00796b' : '#eee',
                color: selectedCaregiver?.name === cg.name ? '#fff' : '#000',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {selectedCaregiver?.name === cg.name ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      {/* Book Button */}
      <button
        onClick={handleBook}
        style={{
          padding: '12px 24px',
          backgroundColor: '#00796b',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default PatientCalendar;
