import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginPage from './LoginPage';
import RolePage from './RolePage';
import PatientSignup from './PatientSignup';
import CaregiverSignup from './CaregiverSignup';
import HelpSupport from './HelpSupport';
import ForgotPassword from './ForgotPassword';
import CaregiverDashboard from './CaregiverDashboard';
import PatientDashboard from './PatientDashboard';
import CaregiverSubscription from './CaregiverSubscription';
import PaymentPage from './PaymentPage';
import CaregiverAppointments from './CaregiverAppointments';
import NotificationsPage from './NotificationsPage';
import ProfileCaregiver from './ProfileCaregiver';


// ✅ Import missing components
import CaregiverList from './CaregiverList';
import PatientCalendar from './PatientCalendar';
import MedicationReminder from './MedicationReminder';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/roles" element={<RolePage />} />
          <Route path="/signup/patient" element={<PatientSignup />} />
          <Route path="/signup/caregiver" element={<CaregiverSignup />} />
          <Route path="/support" element={<HelpSupport />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/subscription" element={<CaregiverSubscription />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/appointments" element={<CaregiverAppointments />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfileCaregiver />} />

          {/* ✅ Added these routes */}
          <Route path="/caregivers" element={<CaregiverList />} />
          <Route path="/calendar" element={<PatientCalendar />} />
          <Route path="/reminders" element={<MedicationReminder />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
