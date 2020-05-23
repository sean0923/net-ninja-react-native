import React from 'react';
import styled from 'styled-components/native';
import { Text, View, Button, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { BodyWrapper } from '../styles/commonStyledComponents';
import { ReviewDetailsRouteProps } from '../types/common.types';
import { fonts } from '../styles/commonStyledComponents';
import { Card } from './common/Card';

import { ratingToHearts } from '../data/keyToImage';

interface Props {
  //
}

export const ReviewDetails: React.FC<Props> = () => {
  const route = useRoute<ReviewDetailsRouteProps>();
  const { review } = route.params;

  return (
    <BodyWrapper>
      <Card>
        <Title>{review.title}</Title>
        <Body>{review.body}</Body>
        <Image source={ratingToHearts[review.rating]} />
      </Card>
    </BodyWrapper>
  );
};

const Title = styled(Text)`
  font-size: 32px;
  font-family: ${fonts.NUNITO_BOLD};
  margin-bottom: 4px;
`;

const Body = styled(Text)`
  font-size: 24px;
  font-family: ${fonts.NUNITO};
`;
