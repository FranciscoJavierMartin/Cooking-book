import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../src/screens/CategoriesScreen';
import CategoryMealsScreen from '../src/screens/CategoryMealsScreen';
import MealDetailScreen from '../src/screens/MealDetailScreen';

const MealsMavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsMavigator);