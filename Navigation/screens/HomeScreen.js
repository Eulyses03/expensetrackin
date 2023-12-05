import * as React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import Navigation from '../Navi';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      style={styles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}></Text>

      <View style={styles.buttons}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate('Add Expense')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Edit Expense"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="View Expense"
          onPress={() => navigation.navigate('ViewExpense')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Liquidate Expense"
          onPress={() => navigation.navigate('LiquidateExpense')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="View Liquidation"
          onPress={() => navigation.navigate('ViewLiquidation')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Back"
          onPress={() => navigation.navigate('Sign in')}
        />
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
  },
  buttons: {
    paddingVertical: 30,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
