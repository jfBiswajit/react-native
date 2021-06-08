import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const BoxModelScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Box Model</Text>
      <View style={style.container}>
        <Text style={[style.item, { backgroundColor: '#3498db' }, {alignSelf: 'flex-end'}]}>Item One</Text>
        <Text style={[style.item, { backgroundColor: '#27ae60' },{alignSelf: 'center'}]}>Item Two</Text>
        <Text style={[style.item, { backgroundColor: '#d35400' }, {alignSelf: 'flex-start'}]}>Item Three</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
  },
  text: {
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    padding: 5,
  },
  container: {
    alignItems: 'stretch'
  },
  item: {
    padding: 20,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default BoxModelScreen;
