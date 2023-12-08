/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/Components/Screens/HomeScreen';
import AccountScreen from './src/Components/Screens/AccountScreen';
import AddExpense from './src/Components/Screens/AddExpense';
import ViewExpense from './src/Components/Screens/ViewExpense';
import EditBudget from './src/Components/Screens/EditBudget';
import LiquidateExpense from './src/Components/Screens/LiquidateExpense';
import ViewLiquidation from './src/Components/Screens/ViewLiquidation';
import AddBudget from './src/Components/Screens/AddBudget';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define screens

const AccountS = () => { /* ... */ };
const Home = () => { /* ... */ };
const ExpenseDetailsScreen = () => { /* ... */ };

// Nested Stack Navigator for Home tab
const HomeStack = () => (
  <Stack.Navigator >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Add Expense" component={AddExpense} />
    <Stack.Screen name="View Expense" component={ViewExpense} />
    <Stack.Screen name="View Liquidation" component={ViewLiquidation} />
    <Stack.Screen name="Edit Budget" component={EditBudget} />
    <Stack.Screen name="Liquidate Expense" component={LiquidateExpense} />
    <Stack.Screen name="Add Budget" component={AddBudget} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer >
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


