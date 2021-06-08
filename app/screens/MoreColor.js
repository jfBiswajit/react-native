import React, { useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT_BY = 50;

const reducer = (state, action) => {
  if (action.colorTochange === 'red') {
    return { ...state, red: state.red + action.amount };
  }

  if (action.colorTochange === 'green') {
    return { ...state, green: state.green + action.amount };
  }

  if (action.colorTochange === 'blue') {
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
          dispatch({ colorTochange: 'red', amount: COLOR_INCREMENT_BY })
        }
        onDecrese={dispatch({
          colorTochange: 'red',
          amount: -1 * COLOR_INCREMENT_BY,
        })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorTochange: 'green', amount: COLOR_INCREMENT_BY })
        }
        onDecrese={dispatch({
          colorTochange: 'green',
          amount: -1 * COLOR_INCREMENT_BY,
        })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorTochange: 'blue', amount: COLOR_INCREMENT_BY })
        }
        onDecrese={dispatch({
          colorTochange: 'blue',
          amount: -1 * COLOR_INCREMENT_BY,
        })}
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
