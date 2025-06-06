// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// ======= SIGNUP =========
router.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log('📥 Signup Request:', req.body);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('⚠️ Email already exists');
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });

        await newUser.save();
        console.log('✅ User created successfully');
        res.status(201).json({ message: 'Signup successful' });

    } catch (err) {
        console.error('❌ Signup error:', err);
        res.status(500).json({ message: 'Signup failed', error: err.message });
    }
});

// ======= LOGIN =========
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email not registered' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

        res.status(200).json({
            message: 'Login successful',
            role: user.role,
            name: user.name,
        });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
});

// ======= RESET PASSWORD =========
router.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const hashed = await bcrypt.hash(newPassword, 10);
        user.password = hashed;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Password reset failed', error: err.message });
    }
});

module.exports = router;
