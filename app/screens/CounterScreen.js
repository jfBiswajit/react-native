import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={style.textStyle}>{counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: 'center',
  },
});

export default CounterScreen;
