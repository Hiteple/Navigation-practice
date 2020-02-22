import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Login');

    //navigation.dispatch(StackActions.replace('Login'));
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={handlePress} title="Go to login" />
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

export default Home;
