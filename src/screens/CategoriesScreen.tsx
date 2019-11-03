import React from 'react';
import { FlatList } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface ICategoriesScreenProps extends NavigationStackScreenProps {}

const CategoriesScreen: NavigationStackScreenComponent<ICategoriesScreenProps> = (
  props: ICategoriesScreenProps
) => {
  const renderGirdItem = ({ item }: { item: Category }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item: Category, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGirdItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

export default CategoriesScreen;
