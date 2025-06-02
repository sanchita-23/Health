import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginPage from './LoginPage';
import RolePage from './RolePage';
import PatientSignup from './PatientSignup';
import CaregiverSignup from './CaregiverSignup';
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
            <Route path="/forgot-password" element={<ForgotPassword />} />
          

        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
