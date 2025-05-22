import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <WelcomeScreen />;
}

export default App;
