import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { DrawerNavigator } from './routes/DrawerNavigator';
import { fonts } from './styles/commonStyledComponents';

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

  return <DrawerNavigator />;
};
