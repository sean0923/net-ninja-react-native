import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ReviewProps } from '../screens/Home';
import { ReviewDetails } from '../screens/ReviewDetails';

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

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', ...headerStyles }} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: 'Review Details', ...headerStyles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
