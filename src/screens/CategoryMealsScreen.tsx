import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import Category from '../models/category';
import Meal from '../models/meal';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

interface ICategoryMealsScreenProps extends NavigationStackScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  ICategoryMealsScreenProps
> = (props: ICategoryMealsScreenProps) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem title={item.title} 
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      image={item.imageUrl}
      onSelectMeal={() => {
        props.navigation.navigate({routeName: 'MealDetail', params: {
          mealId: item.id
        }})
      }}/>
    );
  };
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat: Category) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal: Meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: Meal, index: number) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
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
