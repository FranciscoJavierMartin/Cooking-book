import React from 'react';
import { NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import Meal from '../models/meal';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const FavoritesScreen: NavigationStackScreenComponent = (props: IMealDetailScreenProps) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);
   
  return <MealList listData={favMeals} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps<any, any>
) => {
  return {
    headerTitle: 'Your favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;