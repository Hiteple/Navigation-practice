import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('About');

    //navigation.dispatch(CommonActions.goBack());
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={handlePress} title="Go to about" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
