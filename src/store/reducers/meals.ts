import { TOGGLE_FAVORITE, SET_FILTERS } from './../actions/meals';
import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal: Meal) => meal.id == action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        newState = { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        newState = {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        };
      }
      break;
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal: Meal) => {
        // TODO: Redo with another approach
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.lactose && !meal.isLactoseFree) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });

      newState = { ...state, filteredMeals: filteredMeals };
      break;
    default:
      newState = { ...state };
  }

  return newState;
};

export default mealsReducer;
