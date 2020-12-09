import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import detailStack from '../routes';

const Stack = createStackNavigator();

export default function DetailStack() {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name={detailStack.skillScreen} component={ProfileScreen} /> */}
      {/* <Stack.Screen name={profileStack.skillScreen} /> */}
    </Stack.Navigator>
  );
}
