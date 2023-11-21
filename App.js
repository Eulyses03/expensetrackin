import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import Signinscreen from './src/screens/Signinscreen';
import Signupscreen from './src_4/Signupscreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Signupscreen>Sign in</Signupscreen>
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
