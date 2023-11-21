import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton_2 = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.Text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  Text: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default CustomButton_2;
