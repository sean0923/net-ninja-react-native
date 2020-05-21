import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

interface Props {
  //
}

export const About: React.FC<Props> = () => {
  return (
    <StyledContainer>
      <Text>About</Text>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  flex: 1;
`;

// const StyledText = styled(Text)`
//  flex: 1;
// `;
