import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const HomeScreen = (pros) => {
  return (
    <View>
      <Button
        title="Friend List"
        onPress={() => pros.navigation.navigate('List')}
      />
      <Button
        title="Image List"
        onPress={() => pros.navigation.navigate('image')}
      />
    </View>
  );
};

export default HomeScreen;
