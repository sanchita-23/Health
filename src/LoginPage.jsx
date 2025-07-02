import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please enter email and password.');
            return;
        }

        // 🔐 Hardcoded test credentials for offline use
        if (email === 'caregiver@test.com' && password === '123456') {
            setError('');
            navigate('/caregiver-dashboard', { state: { username: 'Caregiver Test' } });
            return;
        }

        if (email === 'patient@test.com' && password === '123456') {
            setError('');
            navigate('/patient-dashboard', { state: { username: 'Patient Test' } });
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
              
            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Login failed.');
            } else {
                setError('');
                if (data.role === 'caregiver') {
                    navigate('/caregiver-dashboard', { state: { username: data.name, email: data.email } });
                } else if (data.role === 'patient') {
                    navigate('/patient-dashboard');
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card} className="slide-in">
                <h1 style={styles.title}>Login</h1>

                <input
                    type="text"
                    placeholder="Email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />

                {error && <p style={styles.error}>{error}</p>}

                <div style={styles.forgotWrapper}>
                    <span style={styles.link} onClick={() => navigate('/forgot-password')}>
                        Forgot password?
                    </span>
                </div>

                <button style={styles.button} onClick={handleLogin}>Log In</button>

                <p style={styles.signupText}>
                    Don’t have an account?{' '}
                    <span style={styles.link} onClick={() => navigate('/roles')}>
                        Sign up
                    </span>
                </p>
            </div>

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
    title: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '25px',
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
    error: {
        color: 'red',
        fontSize: '0.9rem',
        marginBottom: '10px',
    },
    forgotWrapper: {
        width: '100%',
        textAlign: 'right',
        marginBottom: '20px',
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
        marginBottom: '20px',
    },
    signupText: {
        fontSize: '0.95rem',
        color: '#555',
    },
    link: {
        color: '#00897b',
        fontWeight: '600',
        cursor: 'pointer',
        transition: '0.3s',
    },
};

export default LoginPage;
