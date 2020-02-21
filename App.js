import 'react-native-gesture-handler';
import React from 'react';
import HelloWorld from './src/components/helloWorld';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = new createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="helloWorld" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
