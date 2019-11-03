import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface ICategoryMealsScreenProps
  extends NavigationStackScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  ICategoryMealsScreenProps
> = (props: ICategoryMealsScreenProps) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat: Category) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The category meal screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to details'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetail'
          });
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
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
