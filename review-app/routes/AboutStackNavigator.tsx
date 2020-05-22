import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { About } from '../screens/About';
export type RootStackParamList = {
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const headerStyles = {
  headerStyle: {
    backgroundColor: 'coral',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const AboutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={{ title: 'About', ...headerStyles }} />
    </Stack.Navigator>
  );
};
