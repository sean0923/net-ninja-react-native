import React from 'react';
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ReviewProps } from '../screens/Home';
import { ReviewDetails } from '../screens/ReviewDetails';
import { Header } from '../screens/common/Header';
import { Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  ReviewDetails: { review: ReviewProps };
};

export type ReviewDetailsRouteProps = RouteProp<RootStackParamList, 'ReviewDetails'>;

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
