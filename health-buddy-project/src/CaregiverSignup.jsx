import React, { useState } from 'react';

const CaregiverSignup = () => {
    const [form, setForm] = useState({
        fullName: '',
        profession: '',
        experience: '',
        certification: null,
        serviceArea: '',
        availability: '',
        rate: '',
        contact: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.agree) {
            alert('Please agree to the Terms & Conditions');
            return;
        }
        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // TODO: Connect with Firebase later
        alert('Caregiver signed up successfully!');
    };

    return (
        <div style={styles.page}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h1 style={styles.title}>Sign Up</h1>

                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="profession"
                    placeholder="Profession (Nurse, PSW, etc.)"
                    value={form.profession}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="experience"
                    placeholder="Years of Experience"
                    value={form.experience}
                    onChange={handleChange}
                    style={styles.input}
                />

                {/* Custom Upload Box */}
                <div style={styles.uploadBox}>
                    <label htmlFor="cert-upload" style={styles.uploadLabel}>
                        {form.certification ? form.certification.name : 'Upload Certification (PDF/Image)'}
                    </label>
                    <input
                        type="file"
                        id="cert-upload"
                        name="certification"
                        accept=".pdf,.jpg,.jpeg,.png"
                        style={{ display: 'none' }}
                        onChange={handleChange}
                    />
                </div>

                <input
                    name="serviceArea"
                    placeholder="Service Area (City/Postal Code)"
                    value={form.serviceArea}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="availability"
                    placeholder="Availability"
                    value={form.availability}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="rate"
                    placeholder="Suggested Hourly Rate"
                    value={form.rate}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    name="contact"
                    placeholder="Contact Information"
                    value={form.contact}
                    onChange={handleChange}
                    style={styles.input}
                />

                <div style={styles.row}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        style={styles.inputHalf}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={styles.inputHalf}
                    />
                </div>

                <div style={styles.checkboxRow}>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                    />
                    <label htmlFor="agree" style={styles.checkboxLabel}>
                        I agree to the Terms & Conditions
                    </label>
                </div>

                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
    },
    form: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '480px',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '25px',
        textAlign: 'center',
    },
    input: {
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginBottom: '15px',
    },
    row: {
        display: 'flex',
        gap: '10px',
        marginBottom: '15px',
    },
    inputHalf: {
        flex: 1,
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
    },
    uploadBox: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '12px',
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        marginBottom: '15px',
        textAlign: 'center',
        transition: '0.3s',
    },
    uploadLabel: {
        fontSize: '0.95rem',
        color: '#888',
        cursor: 'pointer',
    },
    checkboxRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    checkboxLabel: {
        marginLeft: '10px',
        fontSize: '0.95rem',
        color: '#555',
    },
    button: {
        padding: '14px',
        fontSize: '1rem',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#26a69a',
        color: '#fff',
        fontWeight: '600',
        cursor: 'pointer',
    },
};

export default CaregiverSignup;
