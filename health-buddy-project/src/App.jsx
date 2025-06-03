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
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/help/faqs" element={<div>FAQs Page</div>} />
            <Route path="/help/contact" element={<div>Contact Page</div>} />
            <Route path="/help/chatbot" element={<div>Chatbot Page</div>} />
            <Route path="/help/report" element={<div>Report Problem Page</div>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
