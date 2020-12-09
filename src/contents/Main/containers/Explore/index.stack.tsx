import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './screens';
import exploreStack from './routes';
import ApplicantScreens from './containers/screens/ApplicantDetail';
import EmployerScreens from './containers/screens/EmployerDetail';
import FilterScreen from './containers/screens/FilterScreen';
import SelectCateDetail from './containers/screens/SelectCateDetail';

const Stack = createStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={exploreStack.index} component={ExploreScreen} />
      <Stack.Screen
        name={exploreStack.applicantscreens}
        component={ApplicantScreens}
      />
      <Stack.Screen name={exploreStack.FilterScreen} component={FilterScreen} />
      <Stack.Screen
        name={exploreStack.employerscreens}
        component={EmployerScreens}
      />
      <Stack.Screen
        name={exploreStack.selectCateScreen}
        component={SelectCateDetail}
      />
    </Stack.Navigator>
  );
}
