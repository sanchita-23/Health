const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
    caregiverId: mongoose.Schema.Types.ObjectId,
    fileName: String,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Observation', observationSchema);
