import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
const Stack = createStackNavigator();

import { SearchScreen, ApplicationScreen } from "../modules";

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={'SEARCH_SCREEN'}>
        <Stack.Screen name={'SEARCH_SCREEN'} component={SearchScreen} />
        <Stack.Screen name={'APPLICATION_SCREEN'} component={ApplicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const RootApp = (props) => {
  return (
    <Root {...props} />
  );
};

export default RootApp;
