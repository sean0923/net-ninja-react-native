import React from 'react';
import styled from 'styled-components/native';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { BodyWrapper } from '../styles/commonStyledComponents';
import { useNavigation } from '@react-navigation/native';

export interface ReviewProps {
  id: string;
  title: string;
  body: string;
}

interface Props {
  //
}

export const Home: React.FC<Props> = () => {
  const navigation = useNavigation();

  const toReviewDetials = (review: ReviewProps) => {
    navigation.navigate('ReviewDetails', { review });
  };

  const [reviews, setReviews] = React.useState([
    { id: '1', title: 'Review 1', body: 'Eiusmod amet sit id nulla in labore aliqua.' },
    { id: '2', title: 'Review 2', body: 'Eiusmod amet sit id nulla in labore aliqua.' },
    { id: '3', title: 'Review 3', body: 'Eiusmod amet sit id nulla in labore aliqua.' },
  ]);

  return (
    <BodyWrapper>
      <StyledText>Home</StyledText>
      <FlatList
        keyExtractor={({ id }) => id}
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                toReviewDetials(item);
              }}
            >
              <Title>{item.title}</Title>
            </TouchableOpacity>
          );
        }}
      />
    </BodyWrapper>
  );
};

const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled(Text)`
  padding: 20px;
  border: 1px dashed coral;
  margin: 10px 0;
`;
