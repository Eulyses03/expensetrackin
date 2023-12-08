/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const AccountScreen = ({user}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
      </Text>
      <Text style={{fontSize: 16, marginTop: 10}}>Email: </Text>
      <View style={{marginTop: 20}}>
        <Button
          title="Edit Profile"
          onPress={() => {
            /* Navigate to Edit Profile screen */
          }}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button
          title="Log Out"
          onPress={() => {
            /* Handle logout logic */
          }}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
