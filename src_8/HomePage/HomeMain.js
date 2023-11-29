import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions} from 'react-native';
import Logo from './Logo/Logo_1.png';

const HomeMain = () => {

  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>To</Text>
      <Image source={Logo} style={[StyleSheet.logo, { height: height * 0.3 }]} resizeMode="contain" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddExpenseScreen')}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditExpenseScreen')}>
          <Text style={styles.buttonText}>Edit Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewExpenseScreen')}>
          <Text style={styles.buttonText}>View Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LiquidateExpenseScreen')}>
          <Text style={styles.buttonText}>Liquidate Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewLiquidationScreen')}>
          <Text style={styles.buttonText}>View Liquidation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeMain;
