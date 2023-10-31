import { ApplicationProvider, BottomNavigationTab } from '@ui-kitten/components';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import ProductDescription from './ProductDescription';
import Landing from './Landing';
import AllAdds from './AllAdds';


const Stack = createStackNavigator();

const HomeStackNavigator = (params) => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="AllAdds" component={AllAdds} />
        <Stack.Screen name="ProductDescription" component={ProductDescription} />
      </Stack.Navigator>
    )
  }
  
export default HomeStackNavigator;



