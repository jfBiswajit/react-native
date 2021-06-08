import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        style={style.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Start typing..."
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={style.text}>{name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    margin: 5,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    margin: 5,
    padding: 5,
  }
});

export default TextScreen;
