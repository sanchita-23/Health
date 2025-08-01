const mongoose = require('mongoose');

const ObservationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Observation', ObservationSchema);
