import React from 'react';
import {View} from 'react-native';
import Welcome from './components/Page/Welcome/Welcome';
import Login from './components/Page/Login/Login';
import styles from './MainStyle';

function App() {
  return (
    <View style={styles.mainBackground}>
      <Welcome />
    </View>
  );
}
export default App;
