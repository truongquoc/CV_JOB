import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppliedScreen from './screens';
import appliedStack from './router';

const Stack = createStackNavigator();

export default function AppliedStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={appliedStack.index} component={AppliedScreen} />
    </Stack.Navigator>
  );
}
