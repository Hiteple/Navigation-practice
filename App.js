import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import Home from './src/components/Home';
import Login from './src/components/Login';
import About from './src/components/About';
import Profile from './src/components/Profile';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = new createStackNavigator();
const myIcon = <Icon name="arrow-left" size={20} color="#fff" />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Mode: only in iOS
        //mode="card"
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          //header: () => <Text>This is a header</Text>,
          headerStyle: {backgroundColor: 'purple'},
          // Gestures
          gesturesEnabled: true,
          //Only in iOS
          //headerBackTitle: 'Back',
          headerBackImage: () => myIcon,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'This is the Home',
            headerTitleAllowFontScaling: true,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
