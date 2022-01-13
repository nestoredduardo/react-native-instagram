import React from 'react';
import tailwind from 'tailwind-rn';

import { View, Button } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={tailwind('flex justify-center')}>
      <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
