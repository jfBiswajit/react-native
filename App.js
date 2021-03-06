import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import FriendScreen from './app/screens/FriendScreen';
import HomeScreen from './app/screens/HomeScreen';
import ImageList from './app/screens/ImageScreen';
import CounterScreen from './app/screens/CounterScreen';
import RandomColor from './app/screens/RandomColor';
import MoreColor from './app/screens/MoreColor';
import TextScreen from './app/screens/TextScreen';
import BoxModelScreen from './app/screens/BoxModelScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="List"
          component={FriendScreen}
          options={{ title: 'Friend List' }}
        />
        <Stack.Screen
          name="image"
          component={ImageList}
          options={{ title: 'Images' }}
        />
        <Stack.Screen
          name="counter"
          component={CounterScreen}
          options={{ title: 'Counter' }}
        />
        <Stack.Screen
          name="colors"
          component={RandomColor}
          options={{ title: 'Colors' }}
        />
        <Stack.Screen
          name="multiple_state"
          component={MoreColor}
          options={{ title: 'Add More Color' }}
        />
        <Stack.Screen
          name="text_input"
          component={TextScreen}
          options={{ title: 'Text Input' }}
        />
        <Stack.Screen
          name="box_model"
          component={BoxModelScreen}
          options={{ title: 'Box Model' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
