/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditBudget = ({ route, navigation }) => {
  const { budget } = route.params;
  const [editedBudget, setEditedBudget] = useState(budget);

  const handleUpdateBudget = () => {
    if (isNaN(editedBudget) || editedBudget <= 0) {
      alert('Please enter a valid budget amount.');
      return;
    }

    const updatedBudget = { ...budget, budget: editedBudget };
    navigation.goBack({ updatedBudget });
  };

  return (
    <View>
      <Text>Current Budget: ${budget}</Text>
      <TextInput
        placeholder="Edit Budget"
        keyboardType="numeric"
        value={editedBudget.toString()}
        onChangeText={(text) => setEditedBudget(parseFloat(text))}
      />
      <Button title="Update Budget" onPress={handleUpdateBudget} />
    </View>
  );
};

export default EditBudget;

