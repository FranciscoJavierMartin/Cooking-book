import React from 'react';
import { NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const FavoritesScreen: NavigationStackScreenComponent = (props: IMealDetailScreenProps) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
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