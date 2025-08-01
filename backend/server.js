const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard'); 
const paymentRoutes = require('./routes/payment');
const appointmentRoutes = require('./routes/appointments');
const supportRoutes = require('./routes/support');

const observationRoutes = require('./routes/observation');





const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5174', // Match your frontend port
    credentials: true,
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection failed:', err.message));

//  Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes); 
app.use('/api/payment',paymentRoutes);
app.use('/api/appointments',appointmentRoutes);
app.use('/api/support',supportRoutes);
app.use('/api/observations', observationRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//  Default route (for checking server status in browser)
app.get('/', (req, res) => {
    res.send('Health Buddy Backend API');
});

//  Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
