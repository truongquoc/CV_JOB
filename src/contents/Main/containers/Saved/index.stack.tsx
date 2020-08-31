import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SavedScreen from './screens';
import savedStack from './router';

const Stack = createStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={savedStack.index} component={SavedScreen} />
    </Stack.Navigator>
  );
}
