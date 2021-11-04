import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import buttonStyle from '../../Components/Button';
import styles from '../../Components/Screen';

function Welcome() {
  const welcomeGreeting = 'Welcome to Let';
  const welcomeTagline = 'Insert Tagline Here!';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHolder}>
        <Text style={styles.welcomeGreeting}>{welcomeGreeting}</Text>
        <Text style={styles.welcomeTagline}>{welcomeTagline}</Text>
        <Button buttonStyle={buttonStyle.loginButton} title="Login" />
        <View>
          <Text style={styles.signupText}>Don’t have an account?</Text>
          <Button style={styles.signUpbutton} title="Sign Up"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
