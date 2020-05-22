import React from 'react';
import styled from 'styled-components/native';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { BodyWrapper } from '../styles/commonStyledComponents';
import { ReviewDetailsRouteProps } from '../routes/Navigator';
import { fonts } from '../App';

interface Props {
  //
}

export const ReviewDetails: React.FC<Props> = () => {
  const navigation = useNavigation();
  const route = useRoute<ReviewDetailsRouteProps>();
  const { review } = route.params;

  const toHome = () => navigation.navigate('Home');

  return (
    <BodyWrapper>
      <Title>{review.title}</Title>
      <Body>{review.body}</Body>
      <Button title="to Home" onPress={toHome} />
    </BodyWrapper>
  );
};

const StyledContainer = styled(View)`
  flex: 1;
`;

const Title = styled(Text)`
  font-size: 32px;
  font-family: ${fonts.NUNITO_BOLD};
  margin-bottom: 4px;
`;

const Body = styled(Text)`
  font-size: 24px;
  font-family: ${fonts.NUNITO};
`;
