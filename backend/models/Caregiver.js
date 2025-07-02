const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
    name: String,
    email: String,
    rating: Number,
    hourlyRate: Number
});

module.exports = mongoose.model('Caregiver', caregiverSchema);
