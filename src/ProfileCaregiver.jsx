import React, { useState } from 'react';
import { FaUserCircle, FaEdit, FaSave, FaCamera } from 'react-icons/fa';

const ProfileCaregiver = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [caregiver, setCaregiver] = useState({
        name: "Sarah ali",
        email: "surekha@example.com",
        profession: "Registered Dietitian",
        experience: "5 years",
        area: "Vancouver, BC",
    });

    const [avatar, setAvatar] = useState("image.png");
    const [newAvatar, setNewAvatar] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCaregiver({ ...caregiver, [name]: value });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
        if (newAvatar) {
            setAvatar(newAvatar); // update avatar preview
            setNewAvatar(null);
        }
        alert('Profile updated successfully!');
        // Optional: Upload avatar and data to backend
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewAvatar(reader.result); // base64 preview
            };
            reader.readAsDataURL(file);
        }
    };

    const styles = {
        page: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            fontFamily: "'Poppins', sans-serif",
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/31/21/23/nurse-2028358_960_720.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(240, 248, 255, 0.8)',
        },
        card: {
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            width: '100%',
            maxWidth: '500px',
            position: 'relative',
            textAlign: 'center',
        },
        avatarWrapper: {
            position: 'relative',
            marginBottom: '20px',
        },
        avatar: {
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #26a69a',
        },
        uploadIcon: {
            position: 'absolute',
            right: '-10px',
            bottom: '-10px',
            backgroundColor: '#26a69a',
            color: '#fff',
            borderRadius: '50%',
            padding: '6px',
            fontSize: '0.9rem',
            cursor: 'pointer',
        },
        hiddenInput: {
            display: 'none',
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center',
            color: '#00796B',
            marginBottom: '10px',
        },
        label: {
            fontWeight: '600',
            marginTop: '15px',
            color: '#333',
        },
        value: {
            marginBottom: '12px',
            fontSize: '1rem',
            color: '#444',
        },
        input: {
            padding: '10px',
            marginBottom: '12px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outline: 'none',
        },
        editButton: {
            position: 'absolute',
            top: '25px',
            right: '25px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: '#555',
        },
        saveButton: {
            marginTop: '25px',
            width: '100%',
            backgroundColor: '#26a69a',
            color: '#fff',
            padding: '14px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.title}><FaUserCircle /> Profile</div>

                <div style={styles.avatarWrapper}>
                    <img
                        src={newAvatar || avatar}
                        alt="Profile Avatar"
                        style={styles.avatar}
                    />
                    {isEditing && (
                        <>
                            <label htmlFor="avatar-upload" style={styles.uploadIcon}>
                                <FaCamera />
                            </label>
                            <input
                                id="avatar-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                style={styles.hiddenInput}
                            />
                        </>
                    )}
                </div>

                <button style={styles.editButton} onClick={handleEditToggle}>
                    <FaEdit title="Edit Profile" />
                </button>

                {Object.entries(caregiver).map(([key, value]) => (
                    <div key={key}>
                        <div style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        {isEditing ? (
                            <input
                                name={key}
                                value={value}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        ) : (
                            <div style={styles.value}>{value}</div>
                        )}
                    </div>
                ))}

                {isEditing && (
                    <button onClick={handleSave} style={styles.saveButton}>
                        <FaSave style={{ marginRight: '8px' }} /> Save Changes
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileCaregiver;
