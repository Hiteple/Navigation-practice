import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Login');
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
