import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import notificationStack from './routes';
import NotificationScreen from './screens/index';

const Stack = createStackNavigator();
export default function NotificationStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={notificationStack.index}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
}
