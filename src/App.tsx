import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <Text style={styles.text}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontFamily: 'Cascadia Code',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
