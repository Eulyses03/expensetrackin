import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../src_2/components/customInput/CustomInput';
import CustomButton from '../../src_3/custombutton/CustomButton';
import CustomButton_2 from '../../src_3/custombutton/custombutton_2/CustomButton_2';
import CustomButton_3 from '../../src_3/colorbutton/CustomButton_3';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmail = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn('Confirmed');

    navigation.navigate('Sign in');
  };
  const onResentPressed = () => {
    console.warn('Resending Code');
  };
  const onBackPressed = (Signinscreen) => {
    console.warn('Back to sign in page');

    navigation.navigate('Sign in');
  };
  const onSigninPressed = () => {
    console.warn('Signing');
  };

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <ScrollView >
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        
        <CustomInput 
          placeholder="Enter Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton_3 text="Resent code" onPress={onResentPressed} />

        <CustomButton_2 text="Back to Sign in" onPress={onBackPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
   padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  Text:{
    color: 'gray',
    padding: 5,
    marginVertical: 10,
    },
  link: {
    color: '#fdb075',
  },
});

export default ConfirmEmail;
