import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const RandomColor = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Random Color</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default RandomColor;
