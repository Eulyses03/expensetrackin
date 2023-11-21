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

const Signupscreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSigninPressed = () => {
    console.warn('Sign in');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  const onFacebookPressed = () => {
    console.warn('Facebook');
  };
  const onGooglePressed = () => {
    console.warn('Google');
  };
  const onCreatePressed = () => {
    console.warn('Ok create');
  };

  const {height} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign in" onPress={onSigninPressed} />
        <CustomButton_2
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
        />
        <CustomButton
          text="Sign in with Facebook"
          onPress={onFacebookPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign in with Google"
          onPress={onGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton_2
          text="Don't have an account? Create one"
          onPress={onCreatePressed}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
});

export default Signupscreen;
