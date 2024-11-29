import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WaterAnalyzer = () => {
  return (
    <View style ={styles.container}>
      <Text>Welcome to the Water Analyzer Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default WaterAnalyzer;