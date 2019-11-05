import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import Meal from '../models/meal';
import DefaultText from '../components/DefaultText';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const FavoritesScreen: NavigationStackScreenComponent = (
  props: IMealDetailScreenProps
) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

  return !favMeals || favMeals.length === 0 ? (
    <View style={styles.content}>
      <DefaultText>No favorite meals found. Start adding some!</DefaultText>
    </View>
  ) : (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps<any, any>
) => {
  return {
    headerTitle: 'Your favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
