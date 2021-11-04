import React from 'react';
import {View, SafeAreaView} from 'react-native';
import LoginForm from './LoginForm';
import styles from './LoginStyle';
import LoginWelcome from './LoginWelcome';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHolder}>
        <LoginWelcome />
        <LoginForm />
      </View>
    </SafeAreaView>
  );
}
export default Login;
