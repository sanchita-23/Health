const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../uploads');
const fs = require('fs');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const upload = multer({ dest: uploadDir });

// In-memory store — replace with MongoDB in production
const observationsStore = {};

// POST: Upload observation file with userId
router.post('/upload', upload.single('file'), (req, res) => {
    const { userId } = req.body;
    const file = req.file;

    if (!userId || !file) {
        return res.status(400).json({ success: false, message: 'Missing userId or file' });
    }

    if (!observationsStore[userId]) {
        observationsStore[userId] = [];
    }

    observationsStore[userId].push(file.filename);

    res.json({ success: true, fileName: file.filename });
});

// GET: Get all observations for userId
router.get('/', (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ success: false, message: 'Missing userId' });
    }

    const files = observationsStore[userId] || [];
    res.json({ success: true, files });
});

module.exports = router;