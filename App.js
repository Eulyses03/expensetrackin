import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import Signinscreen from './src/screens/Signinscreen';
import Signupscreen from './src_4/Signupscreen';
import ConfirmEmail from './src_5/confrimAccount/ConfirmEmail';
import ResetPassword from './src_6/ResetPassword/ResetPassword';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ResetPassword>ok </ResetPassword>
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
