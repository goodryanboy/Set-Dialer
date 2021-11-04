import React from 'react';
import {View, Text} from 'react-native';
import styles from './LoginStyle';

function LoginWelcome() {
  const welcomeText = 'Welcome Back!';
  const welcomeTextBottom = 'Log in to your existing Let account.';
  return (
    <View>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
      <Text style={styles.welcomeTextBottom}>{welcomeTextBottom}</Text>
    </View>
  );
}
export default LoginWelcome;
