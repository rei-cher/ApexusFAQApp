import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    // Splash screen for 3 seconds
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    // Cleanup the timeout
    return () => clearTimeout(timeout);
  }, [])

  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}
