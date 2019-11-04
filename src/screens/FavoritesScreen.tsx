import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const FavoritesScreen: NavigationStackScreenComponent = (props: IMealDetailScreenProps) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your favorites'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;