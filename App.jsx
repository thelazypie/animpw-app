import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import Navigator from './navigation/navigator'

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      <StatusBar networkActivityIndicatorVisible style={'auto'} />
    </NavigationContainer>
  );
}
