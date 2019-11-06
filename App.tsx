import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import MealsNavigator from './navigation/MealsNavigation';
import mealsReducer from './src/store/reducers/meals';
import { Provider } from 'react-redux';
import { IGlobalState } from './src/interfaces/States';

enableScreens();

const rootReducer = combineReducers<IGlobalState>({
  meals: mealsReducer
});

const store = createStore(rootReducer);

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
      <Provider store={store}>
        <MealsNavigator/>
      </Provider>
    );
  } else {
    content = (<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>);
  }

  return content;
}
