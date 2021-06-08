import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const HomeScreen = (pros) => {
  return (
    <View>
      <Button
        title="Friend (Array)"
        onPress={() => pros.navigation.navigate('List')}
      />
      <Button
        title="Image (Component)"
        onPress={() => pros.navigation.navigate('image')}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;
