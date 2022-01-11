import React from 'react';
import tailwind from 'tailwind-rn';

import { Text, View, Button } from 'react-native';

import SignUp from './SignUp';

const Landing = ({ navigation }) => {
  return (
    <View style={tailwind('flex justify-center')}>
      <SignUp />
      <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
