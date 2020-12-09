import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import profileStack from '../Profile/routes';
import PostScreen from './screens/index';

const Stack = createStackNavigator();
export default function PostStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={profileStack.index} component={PostScreen} />
    </Stack.Navigator>
  );
}
