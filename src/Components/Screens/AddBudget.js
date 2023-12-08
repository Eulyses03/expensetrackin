/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, Button,TextInput } from 'react-native';

const AddBudget = ({ route, navigation }) => {
    const { onAddBudget } = route.params;
    const [newBudget, setNewBudget] = useState(0);

    const handleSubmitBudget = () => {
        onAddBudget(newBudget);
        navigation.navigate('Home');
    };

    return (
        <View>
            <TextInput
                placeholder="Enter Budget"
                keyboardType="numeric"
                onChangeText={(text) => setNewBudget(parseFloat(text))}
            />
            <Button title="Add Budget" onPress={handleSubmitBudget} />
        </View>
    );
};

export default AddBudget;

