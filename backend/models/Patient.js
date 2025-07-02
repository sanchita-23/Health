const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    caregiverId: mongoose.Schema.Types.ObjectId,
    rate: Number
});

module.exports = mongoose.model('Patient', patientSchema);
