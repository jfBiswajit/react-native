import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ImageList from '../components/ImageList';

const ImageScreen = (pros) => {
  return (
    <View>
      <ImageList
        title="Forest"
        img={require('../../assets/images/forest.jpg')}
      />
      <ImageList
        title="Mountain"
        img={require('../../assets/images/mountain.jpg')}
      />
      <ImageList title="Beach" img={require('../../assets/images/beach.jpg')} />
    </View>
  );
};

export default ImageScreen;
