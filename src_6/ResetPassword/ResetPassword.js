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


const ResetPassword = () => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('Sending');
  };
  const onResentPressed = () => {
    console.warn('Resending Code');
  };
  const onBackPressed = (Signinscreen) => {
    console.warn('Back to sign in page');
  };
  const onSigninPressed = () => {
    console.warn('Signing');
  };

  const {height} = useWindowDimensions();
  return (
    <ScrollView >
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        
        <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

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

export default ResetPassword;
