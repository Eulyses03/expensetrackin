/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
    fontWeight: 'bold',
  },
  deleteIcon: {
    marginLeft: 20,
  },
  editIcon: {
    marginRight: 20,
  },

});

const EditIcon = ({ id, onPressEdit }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={onPressEdit}>
        <MaterialCommunityIcons name="pencil-outline" size={20} color="#000" />
      </TouchableOpacity>

    </View>
  );
};

const DeleteIcon = ({ id, onPressDelete }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={onPressDelete}>
        <MaterialCommunityIcons name="trash-can-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};


const HomeScreen = ({ navigation }) => {
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState('');
  const [budgets, setBudgets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBudget, setEditedBudget] = useState('');
  const [addMoneyAmount, setAddMoneyAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(0);
  const [editedItemId, setEditedItemId] = useState(null);




  const totalBudget = budgets.reduce((acc, budget) => acc + budget.budget, 0);
  const currentS = budgets.reduce((acc, budget) => acc + budget.budget, 0) - addMoneyAmount;


  const handleAddMoney = () => {
    // Validate input
    if (isNaN(addMoneyAmount) || addMoneyAmount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Update current balance with added money
    setCurrentBalance(currentBalance + parseFloat(addMoneyAmount));

    // Reset state variable
    setAddMoneyAmount('');
  };


  


  const handleAddBudget = () => {
    // Validate input
    if (isNaN(budget) || budget <= 0) {
      alert('Please enter a valid budget amount.');
      return;
    }

  

    // Add budget to list
    setBudgets([...budgets, { id: Math.random().toString(), budget, category }]);

    // Update current balance with added budget
    setCurrentBalance(currentBalance + budget);

    // Reset state variables
    setBudget('');
    setCategory('');
  };



  const handleDeleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };
  const handleEdit = (item) => {
    setIsEditing(true);
    setEditedItemId(item.id); // Set the edited item ID
    setEditedBudget(item.budget); // Pre-populate edit field

  };
  const handleCancelEdit = (item) => {
    setIsEditing(false); // Close the edit form
    // Optionally: reset editedBudget to original value
    setEditedBudget(item.budget);
  };

  const handleSaveEdit = (item) => {
    // Validate edited budget
    if (isNaN(editedBudget) || editedBudget <= 0) {
      alert('Please enter a valid budget amount.');
      return;
    }

    // Calculate the difference between edited and original budget
    const budgetDifference = editedBudget - item.budget;

    // Update budgets state with edited budget
    setBudgets(budgets.map((budget) => (budget.id === item.id ? { ...budget, budget: editedBudget } : budget)));

    // Update total budget based on difference
    setBudget(budget + budgetDifference);

    // Close edit form
    setIsEditing(false);

    // Optionally: clear edited budget
    setEditedBudget('');
  };






  const renderBudgetItem = ({ item }) => {
    if (isEditing && item.id === editedItemId) {
      return (
        <View style={styles.budgetItem}>
          <TextInput
            style={styles.budgetItemText}
            keyboardType="numeric"
            value={editedBudget.toString()}
            onChangeText={(text) => setEditedBudget(parseFloat(text))}
          />
          <View style={styles.editButtons}>
            <TouchableOpacity onPress={handleCancelEdit}>
              <MaterialCommunityIcons name="close" size={20} color="#000" />
            </TouchableOpacity>
            <Button title="Save" onPress={handleSaveEdit} />
          </View>
        </View>
      );
    }

    // Display normal budget item
    return (
      <View style={styles.budgetItem}>
        <Text style={styles.budgetItemText}>Budget: P{item.budget}</Text>
        <Text style={styles.budgetItemText}>Category: {item.category}</Text>
        <View style={{ flexDirection: 'row' }}>

          <EditIcon
            Id={item.Id}
            onPressEdit={() => handleEdit(item)}
          />
          <DeleteIcon id={item.id} onPressDelete={() => handleDeleteBudget(item.id)} />

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalBudget}>Current Balance: P{Math.abs(currentS)}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.budgetInput}
          placeholder="Enter budget money"
          keyboardType="numeric"
          onChangeText={(text) => setAddMoneyAmount(parseFloat(text))}
          value={addMoneyAmount}
        />
      </View>


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



