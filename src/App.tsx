import React from 'react';
import {StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require('./assets/animations/loading2.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#3490dc',
  },
});

export default App;
