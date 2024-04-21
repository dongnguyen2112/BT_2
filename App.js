import React from 'react';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomDrawerNavigation from './CustomDrawerNavigator';
import MaterialBottomTabsNavigator from './MaterialBottomTabsNavigator';
import CustomMaterialBottom from './CustomMaterialBottom';
import DrawerNavigator from './DrawerNavigator';
import NavigationBar from './NavigationBar';



const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <NavigationBar/> */}
        <DrawerNavigator/>
        {/* <MaterialBottomTabsNavigator/> */}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
