import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const HomeScreen = (pros) => {
  return (
    <View>
      <Button
        title="Friend List (Array)"
        onPress={() => pros.navigation.navigate('List')}
      />
      <Button
        title="Image (Component)"
        onPress={() => pros.navigation.navigate('image')}
      />
      <Button
        title="Counter (State)"
        onPress={() => pros.navigation.navigate('counter')}
      />
      <Button
        title="Colors (State, FlatList)"
        onPress={() => pros.navigation.navigate('colors')}
      />
      <Button
        title="More Color (Reducer)"
        onPress={() => pros.navigation.navigate('multiple_state')}
      />
      <Button
        title="Text Input (State)"
        onPress={() => pros.navigation.navigate('text_input')}
      />
      <Button
        title="Box Model"
        onPress={() => pros.navigation.navigate('box_model')}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;
