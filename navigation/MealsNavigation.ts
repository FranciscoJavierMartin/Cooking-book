import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../src/screens/CategoriesScreen';
import CategoryMealsScreen from '../src/screens/CategoryMealsScreen';
import MealDetailScreen from '../src/screens/MealDetailScreen';
import Colors from '../src/constants/Colors';
import { Platform } from 'react-native';

const MealsMavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsMavigator);
