import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';

interface IMealDetailScreenProps extends NavigationStackScreenProps {}

const MealDetailScreen: NavigationStackScreenComponent = (
  props: IMealDetailScreenProps
) => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
      <Button
        title='Go back to Categories'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
