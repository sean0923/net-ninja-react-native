import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { BodyWrapper } from '../styles/commonStyledComponents';
import { ReviewProps } from '../types/common.types';
import { Card } from './common/Card';
import { AddNewReviewModal } from './home/AddNewReviewModal';

interface Props {
  //
}

export const Home: React.FC<Props> = () => {
  const navigation = useNavigation();

  const toReviewDetials = (review: ReviewProps) => {
    navigation.navigate('ReviewDetails', { review });
  };

  const [reviews, setReviews] = React.useState([
    {
      id: '1',
      title: 'Review 1',
      body: 'Eiusmod amet sit id nulla in labore aliqua.',
      rating: '1',
    },
    {
      id: '2',
      title: 'Review 2',
      body: 'Eiusmod amet sit id nulla in labore aliqua.',
      rating: '5',
    },
    {
      id: '3',
      title: 'Review 3',
      body: 'Eiusmod amet sit id nulla in labore aliqua.',
      rating: '3',
    },
  ]);

  const addNewReview = (newReview: ReviewProps) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <BodyWrapper>
      <AddNewReviewModal addNewReview={addNewReview}/>

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
              <Card>
                <Title>{item.title}</Title>
              </Card>
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
  /* padding: 20px; */
  /* border: 1px dashed coral; */
  /* margin: 10px 0; */
`;

const StyledImageBackground = styled(ImageBackground)`
  flex: 1;
`;
