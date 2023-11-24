import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton_3 = ({onPress, text, bgColor, fgColor}) => {
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
    borderColor: '#3b71f3',
    borderWidth: 2,
    width: '80%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  Text: {
    fontWeight: 'bold',
    color: '#3b71f3',
  },
});

export default CustomButton_3;
