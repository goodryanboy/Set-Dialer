import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#233142',
    flex: 0.5,
    marginTop: 64,
    borderRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  contentHolder: {
    alignItems: 'center',
    paddingTop: 102,
  },
  welcomeGreeting: {
    fontSize: 35,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  welcomeTagline: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  signupText: {
    fontSize: 12,
    color: '#36AC91',
  },
  signUpbutton: {
    backgroundColor: 'transparent',
  },
});

export default styles;
