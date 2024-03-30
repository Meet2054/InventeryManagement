import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadStockScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Load Stock</Text>
      {/* Your load stock content goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0367FE",
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
});

export default LoadStockScreen;
