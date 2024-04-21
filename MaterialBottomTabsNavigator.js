import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'; 
import DetailsScreen from './DetailsScreen';
import CustomMaterialBottom from './CustomMaterialBottom';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabsNavigator = () => {
  return (
    <CustomMaterialBottom
      activeColor="#00CC33"
      inactiveColor="#555555"
      barStyle={{ backgroundColor: '#CCCCCC' }}
    />
  );
};

export default MaterialBottomTabsNavigator;
