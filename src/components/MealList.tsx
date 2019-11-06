import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';
import Meal from '../models/meal';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationRoute, NavigationParams } from 'react-navigation';
import { IGlobalState } from '../interfaces/States';

interface IMealListProps {
  listData: any[];
  navigation: NavigationStackProp<NavigationRoute<NavigationParams>, any>;
}

const MealList = (props: IMealListProps) => {
  const favoriteMeals = useSelector((state: IGlobalState) => state.meals.favoriteMeals);
  const renderMealItem = ({ item }: { item: Meal }) => {
    const isFavorite = favoriteMeals.some((meal: Meal) => meal.id === item.id);
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFav: isFavorite
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item: Meal, index: number) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
