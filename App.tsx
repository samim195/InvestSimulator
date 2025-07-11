import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginRegisterScreen from './app/(tabs)/index';

const App = () => {
  return (
    <NavigationContainer>
      <LoginRegisterScreen />
    </NavigationContainer>
    );
};

export default App;