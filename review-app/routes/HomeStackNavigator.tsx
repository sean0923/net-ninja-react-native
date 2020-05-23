import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { ReviewDetails } from '../screens/ReviewDetails';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/common.types';

const Stack = createStackNavigator<RootStackParamList>();

export interface ParamsList {
  Home: undefined;
  Profile: { userId: string };
  ReviewDetails: { sort: 'latest' | 'top' } | undefined;
}

const headerStyles = {
  headerStyle: {
    backgroundColor: 'coral',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const HomeStackNavigator = () => {
  const navigation = useNavigation();
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
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
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'Review Details', ...headerStyles }}
      />
    </Stack.Navigator>
  );
};
