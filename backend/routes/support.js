const express = require('express');
const router = express.Router();
const SupportRequest = require('../models/SupportRequest');

// POST /api/support
router.post('/', async (req, res) => {
    try {
        const { userId, subject, message } = req.body;

        if (!userId || !message) {
            return res.status(400).json({ error: 'userId and message are required' });
        }

        const support = new SupportRequest({ userId, subject, message });
        await support.save();

        res.status(201).json({ message: 'Support request submitted', support });
    } catch (err) {
        console.error('Error submitting support request:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;