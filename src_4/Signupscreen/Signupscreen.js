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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const onRegisterPressed = () => {
    console.warn('Registered');
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
  const onTermsPressed = () => {
    console.warn('Terms of Use');
  };
  const onPrivacyPressed = () => {
    console.warn('Privacy Policy');
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
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Reapeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.Text}>
          By registering, you accept our{' '}
          <Text style={styles.link} onPress={onTermsPressed}> Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
        </Text>

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
          text="Have an account? Sign in"
          onPress={onSigninPressed}
        />
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

export default Signupscreen;
