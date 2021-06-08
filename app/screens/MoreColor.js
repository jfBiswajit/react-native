import React, { useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT_BY = 50;

const reducer = (state, action) => {
  if (action.colorToChange === 'red') {
    return { ...state, red: state.red + action.amount };
  }

  if (action.colorToChange === 'green') {
    return { ...state, green: state.green + action.amount };
  }

  if (action.colorToChange === 'blue') {
    return { ...state, blue: state.blue + action.amount };
  }

  return state;
};

const MoreColor = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT_BY })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT_BY })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT_BY })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT_BY })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT_BY })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT_BY })
        }
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
