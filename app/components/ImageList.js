import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native';

const ImageList = (pros) => {
  return (
    <View>
      <Image source={pros.img} />
      <Text> {pros.title} </Text>
      <Text> Image Score - {pros.score}</Text>
    </View>
  );
};

export default ImageList;
