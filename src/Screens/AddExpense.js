/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';

const AddExpense = ({navigation}) => {
  const [amount, setAmount] = useState(0); // State variable for expense amount
  const [category, setCategory] = useState(''); // State variable for expense category

  const handleSaveExpense = async () => {
    const expense = {
      amount,
      category,
    };

    try {
      await AsyncStorage.setItem('AddExpense', JSON.stringify(AddExpense));
      navigation.navigate('ViewExpense');
    } catch (error) {
      console.error(error);
    }
    // Validate input data
    if (!amount) {
      Alert.alert('Please enter an expense amount.');
      return;
    }

    if (!category) {
      Alert.alert('Please select an expense category.');
      return;
    }

    // Save expense data (replace this with your actual saving logic)
    console.log(`Saving expense: ${amount} - ${category}`);

    // Navigate back to previous screen
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add Expense</Text>
      <TextInput
        style={{marginTop: 20, width: 200, borderWidth: 1, padding: 10}}
        placeholder="Enter expense amount"
        keyboardType="numeric"
        onChangeText={text => setAmount(text)}
      />
      <TextInput
        style={{marginTop: 20, width: 200, borderWidth: 1, padding: 10}}
        placeholder="Enter expense category"
        onChangeText={text => setCategory(text)}
      />
      <View style={{marginTop: 20}}>
        <Button title="Add Expense" onPress={handleSaveExpense} />
      </View>
    </View>
  );
};

export default AddExpense;
