import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../src_2/components/customInput/CustomInput';
import CustomButton from '../../src_3/custombutton/CustomButton';
import CustomButton_2 from '../../src_3/custombutton/custombutton_2/CustomButton_2';
import CustomButton_3 from '../../src_3/colorbutton/CustomButton_3';
import CustomButton_4 from './CustomButton_4/CustomButton_4';
import Logo from './CustomButton_4/Logo_1.png';
import {useNavigation} from '@react-navigation/native';

const WelcomePage = () => {
  const [code, setCode] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  const onGetPressed = () => {
    console.warn('Proceeding...');

    navigation.navigate('Home Page');
  };
  const onResentPressed = () => {
    console.warn('Resending Code');
  };
  const onBackPressed = Signinscreen => {
    console.warn('Back to sign in page');
  };
  const onSigninPressed = () => {
    console.warn('Signing');
  };

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>To</Text>
        <Image
          source={Logo}
          style={[StyleSheet.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomButton_4 text="Get Started" onPress={onGetPressed} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    marginVertical: '10%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 74,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  Text: {
    color: 'gray',
    padding: 5,
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});

export default WelcomePage;
