import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

interface IFiltersScreenProps extends NavigationStackScreenProps {}

const FiltersScreen: NavigationStackScreenComponent = (props: IFiltersScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The filters screen</Text>
    </View>
  )
};

FiltersScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps<any, any>
) => {
  return {
    headerTitle: 'Filters meals',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;