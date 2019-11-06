import React, { useEffect, useCallback } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Meal from '../models/meal';
import { toggleFavorite } from '../store/actions/meals';
import { IGlobalState } from '../interfaces/States';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};
const MealDetailScreen: NavigationStackScreenComponent = (
  props: IMealDetailScreenProps
) => {
  const mealId: string = props.navigation.getParam('mealId');
  const avaliableMeals = useSelector(
    (state: IGlobalState) => state.meals.meals
  );
  const currentMealIsFavorite = useSelector((state: IGlobalState) =>
    state.meals.favoriteMeals.some((meal: Meal) => meal.id === mealId)
  );
  const selectedMeal: Meal = avaliableMeals.find(
    (meal: Meal) => meal.id === mealId
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient: string) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step: string) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps
) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5
  }
});

export default MealDetailScreen;
