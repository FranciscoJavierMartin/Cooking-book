import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../src/screens/CategoriesScreen';
import CategoryMealsScreen from '../src/screens/CategoryMealsScreen';
import MealDetailScreen from '../src/screens/MealDetailScreen';
import FavoritesScreen from '../src/screens/FavoritesScreen';
import FiltersScreen from '../src/screens/FiltersScreen';
import Colors from '../src/constants/Colors';

const defaultStackNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
};

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

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  defaultStackNavigationOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsMavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name='ios-restaurant' size={25} color={tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? (<Text style={{fontFamily: 'open-sans-bold'}}>Meal</Text>) : 'Meals',
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }: any): React.ReactElement => {
        return <Ionicons name='ios-star' size={25} color={tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? (<Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>) : 'Favorites',
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans',
          },
          activeTintColor: Colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    navigationOptions: {
      drawerLabel: 'Filters'
    }
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: { drawerLabel: 'Meals' }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold',
    }
  }
});

export default createAppContainer(MainNavigator);
