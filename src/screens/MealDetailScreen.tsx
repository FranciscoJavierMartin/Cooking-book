import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const MealDetailScreen: NavigationStackScreenComponent = (
  props: IMealDetailScreenProps
) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal: Meal = MEALS.find((meal: Meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Go back to Categories'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps
) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal: Meal = MEALS.find((meal: Meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={() => {}}/>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
