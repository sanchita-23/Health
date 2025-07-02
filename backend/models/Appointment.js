const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    caregiverId: mongoose.Schema.Types.ObjectId,
    patientName: String,
    date: Date
});

module.exports = mongoose.model('Appointment', appointmentSchema);
