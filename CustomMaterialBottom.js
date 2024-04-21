import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import các màn hình của bạn
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createMaterialBottomTabNavigator();

const CustomMaterialBottom = ({ activeColor, inactiveColor, barStyle }) => {
  return (
    <Tab.Navigator
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      barStyle={barStyle}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            // Xử lý sự kiện khi tab được nhấn
          },
        })}
      />
      <Tab.Screen
        name="Detail"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="info" color={color} size={26} /> // Thay "info" vào đây
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default CustomMaterialBottom;
