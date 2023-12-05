import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomePage from '../src_7/welcomepage/WelcomePage';
import Signinscreen from '../src/screens/Signinscreen';
import Signupscreen from '../src_4/Signupscreen';
import ConfirmEmail from '../src_5/confrimAccount/ConfirmEmail';
import ResetPassword from '../src_6/ResetPassword/ResetPassword';
import HomeMain from '../src_8/HomePage/HomeMain';
import AddExpense from '../src_9/AddExpense';
import EditExpense from '../src_9/AddExpense/EditExpense';
import MainContainer from './MainContainer';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sign in" component={Signinscreen} />
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        
        <Stack.Screen name="Sign up" component={Signupscreen} />
        <Stack.Screen name="Confirm Email" component={ConfirmEmail} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
        <Stack.Screen name="Home Page" component={HomeMain} />
        <Stack.Screen name="Add Expense" component={AddExpense} />
        <Stack.Screen name="Edit Expense" component={EditExpense} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

