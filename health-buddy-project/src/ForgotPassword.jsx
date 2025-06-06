import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        if (!email.trim() || !newPassword.trim()) {
            setError('Please fill in both fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Reset failed.');
            } else {
                alert('Password reset successful!');
                navigate('/login');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card} className="slide-in">
                <div style={styles.icon}>🔒</div>
                <h1 style={styles.title}>Reset Password</h1>
                <p style={styles.subtitle}>
                    Enter your email and a new password to reset your account.
                </p>

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={styles.input}
                />

                {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}

                <button style={styles.button} onClick={handleResetPassword}>Reset Password</button>

                <div style={styles.divider}><span>OR</span></div>

                <p style={styles.linkBold} onClick={() => navigate('/roles')}>
                    Create new account
                </p>

                <button style={styles.back} onClick={() => navigate('/login')}>
                    Back to login
                </button>

                <style>
                    {`
                        .slide-in {
                            animation: slideFadeIn 0.6s ease forwards;
                        }

                        @keyframes slideFadeIn {
                            0% {
                                opacity: 0;
                                transform: translateY(30px);
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }

                        input:focus {
                            outline: none;
                            border-color: #26a69a;
                            box-shadow: 0 0 5px rgba(38, 166, 154, 0.5);
                        }

                        button:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                        }

                        span:hover {
                            text-decoration: underline;
                            color: #00897b;
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        background: 'linear-gradient(to bottom right, #e0f7fa, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
    },
    card: {
        background: '#fff',
        padding: '40px',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '380px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    icon: {
        fontSize: '48px',
        marginBottom: '15px',
    },
    title: {
        fontSize: '1.7rem',
        fontWeight: '700',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '0.95rem',
        color: '#555',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '12px',
        marginBottom: '15px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        transition: '0.3s',
    },
    button: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        backgroundColor: '#26a69a',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: '0.3s',
        marginBottom: '10px',
    },
    divider: {
        fontSize: '0.85rem',
        color: '#aaa',
        margin: '15px 0',
    },
    linkBold: {
        color: '#00897b',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    back: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        backgroundColor: '#f0f0f0',
        color: '#333',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '500',
        cursor: 'pointer',
    },
};

export default ForgotPassword;
