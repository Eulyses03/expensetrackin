/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
const ViewExpense = () => {
    const [expense, setExpense] = useState({});

    useEffect(() => {
        const getExpense = async () => {
            try {
                const storedExpense = await AsyncStorage.getItem('expense');
                const parsedExpense = JSON.parse(storedExpense);
                setExpense(parsedExpense);
            } catch (error) {
                console.error(error);
            }
        };

        getExpense();
    }, []);

    if (!expense) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text>Amount: {expense.amount}</Text>
            <Text>Category: {expense.category}</Text>
            <Text>Date: {expense.date}</Text>
        </View>
    );
};

export default ViewExpense;