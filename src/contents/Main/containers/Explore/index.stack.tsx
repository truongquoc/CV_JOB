import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './screens';
import exploreStack from './routes';

const Stack = createStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={exploreStack.index} component={ExploreScreen} />
    </Stack.Navigator>
  );
}
