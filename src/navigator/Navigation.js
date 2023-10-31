import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';
import { AntDesign } from '@expo/vector-icons';
import { Avatar, Layout, Card, View } from '@ui-kitten/components'; //not worked
import AllAdds from "../screens/AllAdds.js";

const Stack = createStackNavigator();

//avatar is only possible inside an application provider
const MiniProfilePic = () => {
  return (
    <Avatar source={require('../images/star_filled.png')} />
  )
}

//function to get avatar
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, paddingRight: 5 }}
      source={require('../images/star_filled.png')}
    />
  );
}

function BackIcon() {
  return (
      <AntDesign name="left" size={24} color="white" />
  )
}

const options = {
  headerShown: true,
  headerStyle: { backgroundColor: '#008CC7', height: 120 },
  headerTitleAlign: 'center',
  headerTitleStyle: { color: 'white', fontSize: 25 },
  headerRight: () => <LogoTitle />,
  headerRightContainerStyle: { paddingRight: 20 },
  headerLeft: () => <BackIcon />,
  headerLeftContainerStyle: { paddingLeft: 20 },
};



const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={options} name="Home" component={Home} />
      <Stack.Screen name="AllAdds" component={AllAdds}/>
    </Stack.Navigator>
  )
}

export default HomeStackNavigator;