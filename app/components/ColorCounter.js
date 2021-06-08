import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrese }) => {
  return (
    <View>
      <Text> {color} </Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrese()} title={`Decrease ${color}`} />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorCounter;
