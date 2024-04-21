
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react'

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  }
})