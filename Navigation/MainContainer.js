import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//screensBottomTAbs
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AccountScreen from './screens/AccountScreen';
import Signinscreen from '../src/screens/Signinscreen';
//pages


//screennames
const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';
const accountName = 'Account';
const Signin = 'Sign in';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({route})  => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            }else if (rn === accountName) {
              iconName = focused ? 'account' : 'account-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={accountName} component={AccountScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        
        
      </Tab.Navigator>
     
    </NavigationContainer>
  );
}
