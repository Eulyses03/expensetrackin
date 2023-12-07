/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
import AddExpense from './AddExpense';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Expense Management</Text>
      <View style={{marginTop: 20}}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate('AddExpense')}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="View Expense"
          onPress={() => navigation.navigate('ViewExpense')}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button
          title="Edit Expense"
          onPress={() => {
            /* Navigate to Edit Expense screen */
          }}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button
          title="Liquidate Expense"
          onPress={() => {
            /* Navigate to Liquidate Expense screen */
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
