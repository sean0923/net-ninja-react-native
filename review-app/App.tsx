import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export default () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledText>Home</StyledText>
      </StyledHeader>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  flex: 1;
`;

const StyledHeader = styled(View)`
  padding: 60px 20px 20px 20px;
  align-items: center;
  background-color: pink;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
