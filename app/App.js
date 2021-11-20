import React from 'react';
// Import de fonts
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

// Components
import AppLoading from 'expo-app-loading';

// Status Bar Expo (mudar a cor)
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  // Verifica se as fonts nao forem carredas, ele segura a tela de splash.
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <UserContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
