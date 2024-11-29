import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PurifyingWater = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Water Purifying Screen!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PurifyingWater;

