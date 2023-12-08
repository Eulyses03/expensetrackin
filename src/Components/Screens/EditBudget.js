/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditBudget = ({ route, navigation }) => {
  const { budget } = route.params;
  const [editedBudget, setEditedBudget] = useState(budget);

  const handleUpdateBudget = () => {
    // Validate input
    if (isNaN(editedBudget) || editedBudget <= 0) {
      alert('Please enter a valid budget amount.');
      return;
    }

    // Update budget and navigate back with updated value
    navigation.goBack({ updatedBudget: editedBudget });
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

