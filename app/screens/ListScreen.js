import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {
      name: 'One',
      age: 20,
    },
    {
      name: 'Two',
      age: 30,
    },
    {
      name: 'Three',
      age: 40,
    },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            Name: {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
