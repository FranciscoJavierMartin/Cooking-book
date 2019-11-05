import { TOGGLE_FAVORITE } from './../actions/meals';
import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
  let newState;

  switch(action.type){
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex((meal: Meal) => meal.id == action.mealId);
      if(existingIndex >= 0){
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        newState = { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        newState = { ...state, favoriteMeals: state.favoriteMeals.concat(meal)}
      }
    break;
    default:
      newState = {...state};
  }

  return newState;
}

export default mealsReducer;