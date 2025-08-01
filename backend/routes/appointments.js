const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// ✅ Accept or Reject Appointment
router.post('/update-status', async (req, res) => {
    const { appointmentId, status } = req.body;

    try {
        const updated = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update appointment status' });
    }
});

// ✅ Get All Appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});



module.exports = router;