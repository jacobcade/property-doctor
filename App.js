import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Navigation from './src/navigator/Navigation.js';
import BottomTabNavigator from './src/navigator/BottomTabNavigator.js';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </>
    
  );
}
