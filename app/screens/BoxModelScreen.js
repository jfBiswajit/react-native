import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const BoxModelScreen = () => {
  return (
    <View>
      <View style={style.view}>
        <Text style={style.text}>Flex Box</Text>
        <View style={style.container}>
          <Text
            style={[
              style.item,
              { backgroundColor: '#3498db' },
              { alignSelf: 'flex-end' },
            ]}
          >
            Item One
          </Text>
          <Text
            style={[
              style.item,
              { backgroundColor: '#27ae60' },
              { alignSelf: 'center' },
            ]}
          >
            Item Two
          </Text>
          <Text
            style={[
              style.item,
              { backgroundColor: '#d35400' },
              { alignSelf: 'flex-start' },
            ]}
          >
            Item Three
          </Text>
        </View>
      </View>
      <View style={style.view}>
        <Text style={style.text}>Position</Text>
        <View style={style.container}>
          <View style={style.parent}>
            <View style={style.child}></View>
          </View>
        </View>
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
    alignItems: 'stretch',
  },
  item: {
    padding: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  parent: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    position: 'relative',
  },
  child: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    top: '30%',
  },
});

export default BoxModelScreen;
