import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackNavigator } from './HomeStackNavigator';
import { AboutStackNavigator } from './AboutStackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root" drawerPosition="right">
        <Drawer.Screen name="Root" component={HomeStackNavigator} options={{ title: 'Home' }} />
        <Drawer.Screen name="About" component={AboutStackNavigator} options={{ title: 'About' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
