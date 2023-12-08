/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddExpense = ({ navigation }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    const handleAddExpense = () => {
      // Check if localStorage key exists
      if (!localStorage.getItem('expenses')) {
        // Create an empty array if not
        localStorage.setItem('expenses', JSON.stringify([]));
      }

      // Continue adding expense logic
      const expenses = JSON.parse(localStorage.getItem('expenses'));
      // ...
    };


    navigation.navigate('View Expense', { expenseName, expenseAmount });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={expenseName}
        onChangeText={setExpenseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        value={expenseAmount}
        keyboardType="numeric"
        onChangeText={setExpenseAmount}
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddExpense;

