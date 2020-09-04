import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyJobScreen from './screens';
import MyJobTab from './routes';

const Stack = createStackNavigator();

export default function MyJobStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={MyJobTab.myJob}
        component={MyJobScreen}
      />
    </Stack.Navigator>
  );
}
