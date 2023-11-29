import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const LiquidateExpenseScreen = () => {
  const [expenseId, setExpenseId] = useState('');
  const [amount, setAmount] = useState('');

  const liquidateExpense = async () => {
    if (expenseId === '') {
      Alert.alert('Error', 'Please enter the expense ID.');
      return;
    }

    if (amount === '') {
      Alert.alert('Error', 'Please enter the liquidation amount.');
      return;
    }

    // Implement API call to liquidate expense
    const response = await fetch('https://your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expenseId,
        amount,
      }),
    });

    const data = await response.json();
    if (data.success) {
      // Navigate to ViewLiquidation screen
      navigation.navigate('ViewLiquidation');
    } else {
      Alert.alert('Error', 'Failed to liquidate expense.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#007bff" />
        </TouchableOpacity>

        <Text style={styles.title}>Liquidate Expense</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Expense ID"
          value={expenseId}
          onChangeText={text => setExpenseId(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Liquidation Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={text => setAmount(text)}
        />

        <TouchableOpacity style={styles.button} onPress={liquidateExpense}>
          <Text style={styles.buttonText}>Liquidate Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LiquidateExpenseScreen;
