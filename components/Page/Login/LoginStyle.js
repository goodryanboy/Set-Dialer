import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#233142',
    flex: 1,
    marginTop: 64,
    borderRadius: 35,
  },
  contentHolder: {
    paddingTop: 98,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeTextBottom: {
    color: '#ABABAB',
    fontSize: 14,
    fontWeight: '400',
    opacity: 40,
    textAlign: 'center',
    marginTop: 4,
  },
  textInput: {
    borderRadius: 5,
    width: 311,
    maxWidth: '100%',
    backgroundColor: 'rgba(99, 110, 122, 0.4)',
    height: 40,
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
    marginBottom: 16,
  },
  loginForm: {
    marginTop: 71,
  },
});
