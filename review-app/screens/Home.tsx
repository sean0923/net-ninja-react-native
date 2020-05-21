import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {
  //
}

export const Home: React.FC<Props> = () => {
  return (
    <StyledContainer>
      <StyledText>Home</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)``;

const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
