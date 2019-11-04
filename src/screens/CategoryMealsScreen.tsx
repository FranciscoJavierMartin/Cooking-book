import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import Category from '../models/category';
import Meal from '../models/meal';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

interface ICategoryMealsScreenProps extends NavigationStackScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  ICategoryMealsScreenProps
> = (props: ICategoryMealsScreenProps) => {
  
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    (meal: Meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  
  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps<any, any>
) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat: Category) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
