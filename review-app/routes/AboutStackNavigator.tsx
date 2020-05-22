import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { About } from '../screens/About';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerRight: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
              onPress={openDrawer}
            />
          ),
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};
