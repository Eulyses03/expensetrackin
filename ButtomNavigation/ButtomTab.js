import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Record Expense" component={RecordExpenseScreen} />
            <Tab.Screen name="View Expense" component={ViewExpenseScreen} />
        </Tab.Navigator>
    );
};
