import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import Category from '../models/category';
import Meal from '../models/meal';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { IGlobalState } from '../interfaces/States';

interface ICategoryMealsScreenProps extends NavigationStackScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  ICategoryMealsScreenProps
> = (props: ICategoryMealsScreenProps) => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state: IGlobalState) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal: Meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return displayedMeals.length === 0 ? (
    <View style={styles.content}>
      <DefaultText>No meals found, maybe check your filters?</DefaultText>
    </View>
  ) : (
    <MealList listData={displayedMeals} navigation={props.navigation} />
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default CategoryMealsScreen;
