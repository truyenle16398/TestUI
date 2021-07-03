import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Main from "./src/navigators";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle={'dark-content'} />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
