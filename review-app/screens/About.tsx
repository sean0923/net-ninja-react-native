import React from 'react';
import styled from 'styled-components/native';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  //
}

export const About: React.FC<Props> = () => {
  const navigation = useNavigation();

  const toHome = () => navigation.navigate('Home');

  return (
    <StyledContainer>
      <Text>About</Text>
      <Button title="to Home" onPress={toHome} />
    </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  flex: 1;
`;

// const StyledText = styled(Text)`
//  flex: 1;
// `;
