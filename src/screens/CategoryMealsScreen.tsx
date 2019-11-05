import React from 'react';
import { useSelector } from 'react-redux';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import Category from '../models/category';
import Meal from '../models/meal';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

interface ICategoryMealsScreenProps extends NavigationStackScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  ICategoryMealsScreenProps
> = (props: ICategoryMealsScreenProps) => {
  
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state:any) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
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
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
