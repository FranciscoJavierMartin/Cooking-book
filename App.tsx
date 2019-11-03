import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigation';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  let content: JSX.Element;

  if(fontLoaded){
    content = (
      <MealsNavigator/>
    );
  } else {
    content = <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>;
  }

  return content;
}
