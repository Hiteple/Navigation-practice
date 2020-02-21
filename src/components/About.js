import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const About = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button onPress={handlePress} title="Go to profile" />
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

export default About;
