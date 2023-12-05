import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  useWindowDimensions,
  SafeAreaView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../HomePage/Logo/Logo_1.png';
import MainContainer from '../../Navigation/MainContainer';


const HomeMain = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const onBackPressed = () => {
    navigation.navigate('Welcome Page');
  };

  const [tabIndex, setTabIndex] = React.useState(0);

  const items = [
    {
      icon: 'wallpaper',
      label: 'Wallpapers',
    },
    {
      icon: 'search',
      label: 'Search',
    },
    {
      icon: 'settings',
      label: 'Settings',
    },
  ];

  const handleTabPress = index => {
    setTabIndex(index);
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[StyleSheet.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <View style={styles.buttons}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate('Add Expense')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Edit Expense"
          onPress={() => navigation.navigate('Edit Expense')}
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
          onPress={() => navigation.navigate('Welcome Page')}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    paddingVertical: 20,
    padding: 30,
    marginHorizontal: 10,
  },
  bottomNav: {
    paddingBottom: 20,
  },
});

export default HomeMain;
