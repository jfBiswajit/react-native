import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT_BY = 50;

const MoreColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  const setColor = (color, increaseByValue) => {
    if (color === 'red') {
      red + increaseByValue > 255 || red + increaseByValue < 0 ? null : setRed(red + increaseByValue);
    }
    
    if (color === 'green') {
      green + increaseByValue > 255 || green + increaseByValue < 0 ? null : setGreen(green + increaseByValue);
    }
    
    if (color === 'blue') {
      blue + increaseByValue > 255 || blue + increaseByValue < 0 ? null : setBlue(blue + increaseByValue);
    }
  }

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCREMENT_BY)}
        onDecrese={() => setColor('red', -1 * COLOR_INCREMENT_BY)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INCREMENT_BY)}
        onDecrese={() => setColor('green', -1 * COLOR_INCREMENT_BY)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INCREMENT_BY)}
        onDecrese={() => setColor('blue', -1 * COLOR_INCREMENT_BY)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create();

export default MoreColor;
