import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ListScreen from './app/screens/ListScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Friend List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
