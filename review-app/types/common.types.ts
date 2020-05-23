import { RouteProp } from '@react-navigation/native';

export interface ReviewProps {
  id: string;
  title: string;
  body: string;
  rating: string;
}

export type RootStackParamList = {
  Home: undefined;
  ReviewDetails: { review: ReviewProps };
};

export type ReviewDetailsRouteProps = RouteProp<RootStackParamList, 'ReviewDetails'>;
