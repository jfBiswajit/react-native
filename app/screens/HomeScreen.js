import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const HomeScreen = (pros) => {
  return (
    <Button
      title="Friend List"
      onPress={() => pros.navigation.navigate('List')}
    />
  );
};

export default HomeScreen;
