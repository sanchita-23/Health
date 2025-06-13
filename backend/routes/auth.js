const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// ======= SIGNUP =========
router.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body;

    console.log('📨 Signup request received');
    console.log('Data:', { name, email, role });

    try {
        console.log('🔍 Checking if user exists...');
        const existingUser = await User.findOne({ email });
        console.log('🔎 Find result:', existingUser);

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        console.log('🔐 Hashing password...');
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, role });
        console.log('💾 Saving new user...');
        await newUser.save();
        console.log('✅ User saved successfully');

        res.status(201).json({ message: 'Signup successful' });
    } catch (err) {
        console.error('❌ Signup failed:', err.message);
        res.status(500).json({ message: 'Signup failed', error: err.message });
    }
});

// ======= LOGIN =========
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('📨 Login request received for:', email);

    try {
        const user = await User.findOne({ email });
        console.log('🔍 Found user:', user);

        if (!user) return res.status(400).json({ message: 'Email not registered' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

        console.log('✅ Login successful');
        res.status(200).json({
            message: 'Login successful',
            role: user.role,
            name: user.name,
        });
    } catch (err) {
        console.error('❌ Login failed:', err.message);
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
});

// ======= RESET PASSWORD =========
router.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    console.log('🔁 Reset password request for:', email);

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const hashed = await bcrypt.hash(newPassword, 10);
        user.password = hashed;
        await user.save();

        console.log('✅ Password reset successful');
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        console.error('❌ Password reset failed:', err.message);
        res.status(500).json({ message: 'Password reset failed', error: err.message });
    }
});

module.exports = router;
