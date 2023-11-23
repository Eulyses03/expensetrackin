import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import Signinscreen from './src/screens/Signinscreen';
import Signupscreen from './src_4/Signupscreen';
import ConfirmEmail from './src_5/confrimAccount/ConfirmEmail';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmEmail>ok </ConfirmEmail>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
