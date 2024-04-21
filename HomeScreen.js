import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Contact')}
        style={styles.button} 
        labelStyle={styles.buttonText} 
      >
        Go to contact
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#666666', 
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#6666FF', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
