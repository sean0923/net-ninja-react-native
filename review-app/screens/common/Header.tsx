import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';

interface Props {
  //
}

export const Header: React.FC<Props> = () => {
  return (
          <StyledContainer>
          <StyledText>Header</StyledText>
        </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  /* color: red; */
`;
