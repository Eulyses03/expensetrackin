import * as React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../src_3/custombutton/CustomButton';

export default function AccountScreen({navigation}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Account')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Account Screen
      </Text>
      <CustomButton
        text="Back"
        onPress={() => navigation.navigate('Sign in')}
      />
    </View>
  );
}
