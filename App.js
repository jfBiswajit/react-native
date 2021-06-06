import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './app/screens/ListScreen';

export default function App() {
  const name = "Biswajit Biswas";
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45 }}>Getting started with react native</Text>
      <Text style={{ fontSize: 20 }}>Hello there!</Text>
      <Text>{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
