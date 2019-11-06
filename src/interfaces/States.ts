import Meal from '../models/meal';

export interface IMealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

export interface IGlobalState {
  meals: IMealsState;
}