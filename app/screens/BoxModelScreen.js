import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const BoxModelScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Box Model</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderWidth: 5,
    borderColor: 'black',
    padding: 10
  },
  text: {
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    padding: 5
  }
});

export default BoxModelScreen;
