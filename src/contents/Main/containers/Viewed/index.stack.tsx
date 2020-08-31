import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewedScreen from './screens';
import viewedStack from './router';

const Stack = createStackNavigator();

export default function ViewedStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={viewedStack.index} component={ViewedScreen} />
    </Stack.Navigator>
  );
}
