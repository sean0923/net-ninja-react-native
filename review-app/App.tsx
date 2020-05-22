import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import { HomeStackNavigator } from './routes/HomeStackNavigator';
import { DrawerNavigator } from './routes/DrawerNavigator';
import { View, Text } from 'react-native';
import { HomeStackNavigator } from './routes/HomeStackNavigator';

export const fonts = {
  NUNITO: 'NUNITO',
  NUNITO_BOLD: 'NUNITO_BOLD',
};

const fetchFont = () => {
  return Font.loadAsync({
    [fonts.NUNITO]: require('./assets/fonts/Nunito-Regular.ttf'),
    [fonts.NUNITO_BOLD]: require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default () => {
  const [isFetchingFont, setIsFetchingFont] = React.useState(true);

  if (isFetchingFont) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setIsFetchingFont(false)}
        onError={console.warn}
      />
    );
  }

  // return <View>
  //   <Text>aaa</Text>
  // </View>

  return <DrawerNavigator />;
};
