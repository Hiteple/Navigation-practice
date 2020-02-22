import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Profile = ({route, navigation}) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };

  const setParams = () => {
    navigation.setParams({
      btn: 'Name changed!!!',
    });
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={handlePress} title={route.params.btn} />
      <Button onPress={setParams} title="Change name" />
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
