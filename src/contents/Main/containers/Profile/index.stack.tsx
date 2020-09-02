import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import profileStack from './routes';
import { ProfileScreen } from './screens';

const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={profileStack.index} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
