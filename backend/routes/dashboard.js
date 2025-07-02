const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Caregiver = require('../models/Caregiver');
const Appointment = require('../models/Appointment');
const Observation = require('../models/Observation');

// ✅ GET total patients
router.get('/total-patients/:id', async (req, res) => {
    const count = await Patient.countDocuments({ caregiverId: req.params.id });
    res.json({ count });
});

// ✅ GET today's appointments
router.get('/appointments-today/:id', async (req, res) => {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const end = new Date(); end.setHours(23, 59, 59, 999);
    const count = await Appointment.countDocuments({
        caregiverId: req.params.id,
        date: { $gte: start, $lte: end }
    });
    res.json({ count });
});

// ✅ GET rating
router.get('/rating/:id', async (req, res) => {
    const caregiver = await Caregiver.findById(req.params.id);
    res.json({ rating: caregiver?.rating || 0 });
});

// ✅ GET caregiver info (includes hourlyRate)
router.get('/caregiver/:id', async (req, res) => {
    try {
        const caregiver = await Caregiver.findById(req.params.id);
        if (!caregiver) return res.status(404).json({ message: 'Caregiver not found' });
        res.json(caregiver);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch caregiver', error });
    }
});

// ✅ GET assigned patients
router.get('/assigned-patients/:id', async (req, res) => {
    const patients = await Patient.find({ caregiverId: req.params.id });
    res.json({ patients });
});

// ✅ GET upcoming appointments
router.get('/upcoming-appointments/:id', async (req, res) => {
    const now = new Date();
    const appointments = await Appointment.find({
        caregiverId: req.params.id,
        date: { $gt: now }
    }).sort({ date: 1 }).limit(3);
    res.json({ appointments });
});

// ✅ GET uploaded observations
router.get('/observations/:id', async (req, res) => {
    try {
        const files = await Observation.find({ caregiverId: req.params.id }).sort({ uploadedAt: -1 });
        res.json({ files });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to retrieve observations' });
    }
});

// ✅ POST upload observation
router.post('/upload', async (req, res) => {
    const { caregiverId, fileName } = req.body;
    try {
        await Observation.create({ caregiverId, fileName });
        res.json({ message: 'Observation uploaded' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Upload failed' });
    }
});

// ✅ PUT update hourly rate
router.put('/update-rate/:id', async (req, res) => {
    const { rate } = req.body;
    try {
        await Caregiver.findByIdAndUpdate(req.params.id, { hourlyRate: rate });
        res.json({ message: 'Hourly rate updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update rate' });
    }
});

module.exports = router;
