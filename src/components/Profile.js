import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Profile = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={handlePress} title="Go to home" />
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

export default Profile;
