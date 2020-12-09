import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import profileStack from './routes';
import ProfileScreen from './screens';
import SkillScreen from './containers/screens/SkillScreen';
import DetailSkillScreen from './containers/screens/DetailSkillScreen';

const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={profileStack.index} component={ProfileScreen} />
      <Stack.Screen name={profileStack.SkillScreen} component={SkillScreen} />
      <Stack.Screen
        name={profileStack.DetailSkillScreen}
        component={DetailSkillScreen}
      />
    </Stack.Navigator>
  );
}
