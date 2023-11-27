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
import CustomButton_4 from '../../src_7/welcomepage/CustomButton_4/CustomButton_4';
import Logo from '../HomePage/Logo_1.png';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [code, setCode] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  const onGetPressed = () => {
    console.warn('Proceeding...');

    navigation.navigate('Sign in');
  };
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home</Text>

      <CustomButton_4 text="Log out" onPress={onGetPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  Text: {
    color: 'gray',
  },
  link: {
    color: '#fdb075',
  },
});

export default Home;
