import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MailListScreen from './screens';
import mailStack from './routes';

const Stack = createStackNavigator();

export default function MailStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={mailStack.index} component={MailListScreen} />
    </Stack.Navigator>
  );
}
