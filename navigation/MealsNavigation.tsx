import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../src/screens/CategoriesScreen';
import CategoryMealsScreen from '../src/screens/CategoryMealsScreen';
import MealDetailScreen from '../src/screens/MealDetailScreen';
import FavoritesScreen from '../src/screens/FavoritesScreen';
import Colors from '../src/constants/Colors';

const defaultStackNavigationOptions = 
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  }

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
  defaultStackNavigationOptions
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
}, defaultStackNavigationOptions);

const tabScreenConfig = {
  Meals: {
    screen: MealsMavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name='ios-restaurant' size={25} color={tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }: any): React.ReactElement => {
        return <Ionicons name='ios-star' size={25} color={tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);
