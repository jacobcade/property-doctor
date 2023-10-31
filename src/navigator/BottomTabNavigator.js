import React from "react";
import HomeStackNavigator from '../screens/Home.js';
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "../components/TabBar.js";
import Search from "../screens/Search.js";
import Notifications from "../screens/Notifications.js";
import UserAccount from "../screens/UserAccount.js";
import AddNewItem from "../screens/AddNewItem.js";
import { Layout, Icon } from "@ui-kitten/components";
import { AntDesign } from '@expo/vector-icons';
import { ScreenStackHeaderLeftView } from "react-native-screens";

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, paddingRight: 5 }}
      source={require('../images/profile.png')}
    />
  );
}

function BackIcon() {
  return(
    <Layout>
      <AntDesign name="left" size={24} color="white" />
    </Layout>
  )
}


const options =  ({ route }) => ({
  //Tabbar options
  tabBarShowLabel: false,
  tabBarStyle: {backgroundColor: '#008CC7', height: 80, borderTopRightRadius: 20, borderTopLeftRadius: 20 },
  tabBarActiveTintColor: '#025E85',
  tabBarInactiveTintColor: '#FFFFFF',
  tabBarIcon: ({color}) => {
    const { icon } = route.params;
    return <Icon name={icon} style={styles.icon}  fill={color} />
  },
  tabBarBadgeStyle: {top: 20},
  //Header options
  headerShown: true,
  headerStyle: { backgroundColor: '#008CC7', height: 120 },
  headerTitleAlign: 'center',
  headerTitleStyle: { color:'white', fontSize: 25 },
  headerRight: () => <LogoTitle />,
  headerRightContainerStyle: {paddingRight: 20},
  headerLeft: () => <AntDesign style={styles.backIcon} name="left" size={26} color="white" />,
  headerLeftContainerStyle: {paddingLeft: 10 },
})
  

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Home" component={HomeStackNavigator} initialParams={{ icon: 'home' }} />
      <Tab.Screen name="Search"  component={Search} initialParams={{ icon: 'search' }} />
      <Tab.Screen name="Add New Item" component={AddNewItem} initialParams={{ icon: 'plus-square' }}/>
      <Tab.Screen name="Notifications" options={{tabBarBadge: 2}} component={Notifications} initialParams={{ icon: 'bell' }}/>
      <Tab.Screen name="My Profile" component={UserAccount} initialParams={{ icon: 'person' }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  backIcon:{
    backgroundColor: '#025E85',
    padding: 5,
    borderRadius: 5
  },
  icon: {
    width: 36,
    height: 36,
    
  }
})

export default BottomTabNavigator;