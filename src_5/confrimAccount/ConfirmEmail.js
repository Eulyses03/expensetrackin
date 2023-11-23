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


const ConfirmEmail = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn('Confirmed');
  };
  const onFacebookPressed = () => {
    console.warn('Facebook');
  };
  const onGooglePressed = () => {
    console.warn('Google');
  };
  const onSigninPressed = () => {
    console.warn('Signing');
  };

  const {height} = useWindowDimensions();
  return (
    <ScrollView >
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        
        <CustomInput placeholder="Enter Confirmation Code" value={code} setValue={setCode} />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
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
