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

const StyledContainer = styled(View)`
  padding: 60px 20px 20px 20px;
  align-items: center;
  background-color: pink;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
