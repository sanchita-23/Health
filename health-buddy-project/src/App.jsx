import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginPage from './LoginPage';
import RolePage from './RolePage';

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
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
