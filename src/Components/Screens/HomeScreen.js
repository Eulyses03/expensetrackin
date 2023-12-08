/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  totalBudget: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  budgetInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  categoryInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  budgetItemText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
  },
});

const HomeScreen = ({ navigation }) => {
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState('');
  const [budgets, setBudgets] = useState([]);

  const totalBudget = budgets.reduce((acc, budget) => acc + budget.budget, 0);


  const handleAddBudget = () => {
    // Validate input
    if (isNaN(budget) || budget <= ' ') {
      alert('Please enter a valid budget amount.');
      return;
    }

    // Add budget to list
    setBudgets([...budgets, { id: Math.random().toString(), budget, category }]);

    // Reset state variables
    setBudget('');
    setCategory('');
  };

  const handleDeleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

    

  const renderBudgetItem = ({ item }) => (
    <View style={styles.budgetItem}>
      <Text style={styles.budgetItemText}>Budget: P{item.budget}</Text>
      <Text style={styles.budgetItemText}>Category: {item.category}</Text>
      <Button style={styles.deleteButton} title="Delete" onPress={() => handleDeleteBudget(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.totalBudget}>Total Budget: P{totalBudget}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.budgetInput}
          placeholder="Budget Amount"
          keyboardType="numeric"
          value={budget}
          onChangeText={(text) => setBudget(parseFloat(text))}
        />
        <TextInput
          style={styles.categoryInput}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
      </View>
      <Button title="Add Budget" onPress={handleAddBudget} />
      <FlatList data={budgets} renderItem={renderBudgetItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default HomeScreen;



