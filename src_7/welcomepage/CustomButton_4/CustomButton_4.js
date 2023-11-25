import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton_4 = ({onPress, text, bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, bgColor ? {backgroundColor: bgColor} : {}]}>
      <Text style={[styles.Text, fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b71f3',
    width: '60%',
    align: 'center',
    padding: 15,
    marginVertical: '30%',

    alignItems: 'center',
    borderRadius: 5,
  },
  Text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton_4;
