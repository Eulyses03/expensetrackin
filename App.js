/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/Screens/HomeScreen';
import AccountScreen from './src/Screens/AccountScreen';
import AddExpense from './src/Screens/AddExpense';
import ViewExpense from './src/Screens/ViewExpense';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define screens

const AccountS = () => { /* ... */ };
const HomeFeedScreen = () => { /* ... */ };
const ExpenseDetailsScreen = () => { /* ... */ };

// Nested Stack Navigator for Home tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AddExpense" component={AddExpense} />
    <Stack.Screen name="ViewExpense" component={ViewExpense} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

