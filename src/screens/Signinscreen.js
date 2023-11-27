import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../screens/assets/images/Logo_1.png';
import CustomInput from '../../src_2/components/customInput/CustomInput';
import CustomButton from '../../src_3/custombutton/CustomButton';
import CustomButton_2 from '../../src_3/custombutton/custombutton_2/CustomButton_2';
import {useNavigation} from '@react-navigation/native';

const Signinscreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSigninPressed = () => {
    console.warn('Sign in');
    //validate

    navigation.navigate('Welcome Page');

  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');

    navigation.navigate('Reset Password');
  };
  const onFacebookPressed = () => {
    console.warn('Facebook');

    navigation.navigate('Welcome Page');
  };
  const onGooglePressed = () => {
    console.warn('Google');

    navigation.navigate('Welcome Page');
  };
  const onCreatePressed = () => {
    console.warn('Ok create');

    navigation.navigate('Sign up');
  };

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[StyleSheet.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxheight: 200,
  },
});

export default Signinscreen;
