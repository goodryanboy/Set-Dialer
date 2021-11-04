import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './LoginStyle';

function LoginForm() {
  return (
    <View style={styles.loginForm}>
      <TextInput style={styles.textInput} placeholder="eMail"></TextInput>
      <TextInput style={styles.textInput} placeholder="Password"></TextInput>
    </View>
  );
}
export default LoginForm;
