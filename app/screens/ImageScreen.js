import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ImageList from '../components/ImageList';

const ImageScreen = (pros) => {
  return (
    <View>
      <ImageList
        title="Forest"
        img={require('../../assets/images/forest.jpg')}
        score={5}
      />
      <ImageList
        title="Mountain"
        img={require('../../assets/images/mountain.jpg')}
        score={5}
      />
      <ImageList
        title="Beach"
        img={require('../../assets/images/beach.jpg')}
        score={8}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
