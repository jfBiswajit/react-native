import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ImageList from '../components/ImageList'

const ImageScreen = (pros) => {
  return (
    <View>
      <ImageList/>
      <ImageList/>
      <ImageList/>
      <ImageList/>
    </View>
  )
};

export default ImageScreen;
