import 'react-native-gesture-handler';
import AppNavigator from './src/AppNavigator';
import React, {useEffect} from 'react';
import ContextProvider from './src/services/context';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ContextProvider>
      <AppNavigator />
    </ContextProvider>
  );
}
