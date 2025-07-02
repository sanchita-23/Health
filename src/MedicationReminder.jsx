import React, { useEffect, useState } from 'react';

const types = ['Tablet', 'Capsule', 'Injection', 'Other'];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const doses = ['Once a Day', 'Twice a Day', 'Three Times a Day'];

const MedicationReminder = () => {
    const [reminders, setReminders] = useState([]);
    const [form, setForm] = useState({
        type: '',
        name: '',
        description: '',
        time1: '',
        time2: '',
        duration: '',
        selectedDays: [],
        dose: ''
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('medReminders')) || [];
        setReminders(stored);
    }, []);

    const handleDayToggle = (day) => {
        setForm((prev) => ({
            ...prev,
            selectedDays: prev.selectedDays.includes(day)
                ? prev.selectedDays.filter((d) => d !== day)
                : [...prev.selectedDays, day],
        }));
    };

    const handleSubmit = () => {
        if (!form.name || !form.time1 || !form.type) return alert('Please fill required fields');
        const updated = [...reminders, form];
        localStorage.setItem('medReminders', JSON.stringify(updated));
        setReminders(updated);
        setForm({
            type: '',
            name: '',
            description: '',
            time1: '',
            time2: '',
            duration: '',
            selectedDays: [],
            dose: ''
        });
    };

    const handleDelete = (index) => {
        const updated = reminders.filter((_, i) => i !== index);
        localStorage.setItem('medReminders', JSON.stringify(updated));
        setReminders(updated);
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'sans-serif',
            maxWidth: '1000px',
            margin: '40px auto',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ marginBottom: '30px' }}>Add Medication Reminder</h2>

            {/* Medicine Type */}
            <p><strong>Choose Medicine Type:</strong></p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {types.map((type) => (
                    <button key={type}
                        onClick={() => setForm({ ...form, type })}
                        style={{
                            padding: '10px 14px',
                            borderRadius: '10px',
                            backgroundColor: form.type === type ? '#00796b' : '#eee',
                            color: form.type === type ? '#fff' : '#000',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Medication Name + Description + Duration */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    placeholder="Medicine Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    style={{ flex: 2, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="number"
                    placeholder="Duration in Days (e.g. 30)"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    style={{ width: '200px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
            </div>

            {/* Time Inputs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="time"
                    value={form.time1}
                    onChange={(e) => setForm({ ...form, time1: e.target.value })}
                    style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="time"
                    value={form.time2}
                    onChange={(e) => setForm({ ...form, time2: e.target.value })}
                    style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
            </div>

            {/* Days Selector */}
            <p><strong>Select Days:</strong></p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {weekdays.map((day) => (
                    <button key={day}
                        onClick={() => handleDayToggle(day)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '6px',
                            backgroundColor: form.selectedDays.includes(day) ? '#00796b' : '#eee',
                            color: form.selectedDays.includes(day) ? '#fff' : '#000',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Dose Frequency */}
            <p><strong>Dose Frequency:</strong></p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                {doses.map((d) => (
                    <button key={d}
                        onClick={() => setForm({ ...form, dose: d })}
                        style={{
                            padding: '10px 14px',
                            borderRadius: '10px',
                            backgroundColor: form.dose === d ? '#00796b' : '#eee',
                            color: form.dose === d ? '#fff' : '#000',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {d}
                    </button>
                ))}
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
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
                Add Medicine
            </button>
        </div>
    );
};

export default MedicationReminder;