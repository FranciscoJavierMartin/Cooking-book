import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface ICategoryMealsScreenProps {
  navigation: NavigationScreenProp<any>;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The category meal screen</Text>
      <Button title="Go to details" onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }}/>
      <Button title="Go Back" onPress={() => { props.navigation.goBack() }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;