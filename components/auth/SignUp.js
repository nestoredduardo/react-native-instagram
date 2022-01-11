import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { View, Button, TextInput } from 'react-native';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="name"
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="email"
            onChangeText={(value) => onChange(value)}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="password"
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit())} />
    </View>
  );
};

export default SignUp;
