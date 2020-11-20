/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Icon, withTheme } from 'react-native-elements';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { useSelector } from 'react-redux';
import { applyObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ApplyScreen from './screens/ApplyScreen';
import SaveScreen from './screens/SaveScreen';
import ViewScreen from './screens/ViewScreen';
import myJobTopTab from './routes';

const TopTab = createMaterialTopTabNavigator();

function MyJobTopTab(props: any) {
  const {
    theme: {
      colors: { bgColor, primary },
    },
    t,
  } = props;
  const loginSelectorData = useSelector((state) => applyObjectSelector(loginSelector, state));
  const isNotLogin = !loginSelectorData.data.get('token');
  const role = loginSelectorData.data.get('role');

  return (
    <TopTab.Navigator
      tabBarOptions={{
        style: { backgroundColor: '#a5cbf0' },
        labelStyle: {
          textAlign: 'center',
          textTransform: 'capitalize',
        },
        indicatorStyle: {
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#1d71d1',
        indicatorContainerStyle: {},
      }}
    >
      <TopTab.Screen
        name={myJobTopTab.viewedScreen}
        component={ViewScreen}
        options={{ tabBarLabel: 'Viewed', title: 'Viewed' }}
      />
      <TopTab.Screen
        name={myJobTopTab.appliedScreen}
        component={ApplyScreen}
        options={{ tabBarLabel: 'Applied' }}
      />
      <TopTab.Screen
        name={myJobTopTab.savedScreen}
        component={SaveScreen}
        options={{ tabBarLabel: 'Saved' }}
      />
    </TopTab.Navigator>
  );
}

export default compose(withTheme, withTranslation())(MyJobTopTab);
