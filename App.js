import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import FriendScreen from './app/screens/FriendScreen';
import HomeScreen from './app/screens/HomeScreen';
import ImageList from './app/screens/ImageScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
