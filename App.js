import React from 'react';
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ListScreen from './app/screens/ListScreen';

const Stack = createStackNavigator();

function ScreenA() {
  return (
    <View>
      <Text>Screen A</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
