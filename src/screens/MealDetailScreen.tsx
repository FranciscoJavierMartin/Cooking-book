import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface IMealDetailScreenProps {
  navigation: NavigationScreenProp<any>;
}

const MealDetailScreen = (props: IMealDetailScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
      <Button title="Go back to Categories" onPress={() => {
        props.navigation.goBack();
      }}/>
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

export default MealDetailScreen;