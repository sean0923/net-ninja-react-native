import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {
  //
}

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer>
      <CardContent>{children}</CardContent>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  border: coral;
  margin: 10px 0;
  padding: 12px 20px;
`;

const CardContent = styled(View)`
`;
