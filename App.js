import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

import Navigation from './Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation>ok</Navigation>
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
