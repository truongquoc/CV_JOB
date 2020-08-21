/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Icon, withTheme } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bottomNavigationBarHeight } from '@themes/ThemeComponent/Common/CommonProps';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { lightTheme } from '@themes';
import { useSelector } from 'react-redux';
import { applyObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Login/redux/selector';
import mainBottomTab from './routes';
import HomeStack from './containers/Home/index.stack';
import MoreStack from './containers/More/index.stack';

const BottomTabs = createBottomTabNavigator();

function MainBottomTab(props: any) {
  const { theme: { colors: { bgColorSecondary, primary } }, t } = props;
  const loginSelectorData = useSelector((state) => applyObjectSelector(loginSelector, state));
  const isNotLogin = !loginSelectorData.data.get('token');

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: true,
        activeTintColor: primary,
        inactiveTintColor: primary,
        style: {
          height: bottomNavigationBarHeight,
          borderRadius: 20,
          borderTopColor: 'transparent',
          backgroundColor: bgColorSecondary,
        },
        tabStyle: {
          backgroundColor: bgColorSecondary,
          height: 55,
          paddingTop: 8,
          borderRadius: 20,
        },
        labelStyle: {
          fontSize: 12,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTabs.Screen
        name={mainBottomTab.homeStack}
        component={HomeStack}
        options={{
          tabBarLabel: t('bottom_tab:home'),
          tabBarIcon: ({ focused, color, size }) => (focused ? (
            <Icon
              name="home"
              type="material-community"
              color={color}
              size={26}
            />
          ) : (
            <Icon name="home-outline" type="material-community" color={color} size={22} />
          )),
        }}
      />
      <BottomTabs.Screen
        name={mainBottomTab.moreStack}
        component={MoreStack}
        options={{
          tabBarLabel: t('bottom_tab:more'),
          tabBarIcon: ({ focused, color, size }) => (focused ? (
            <Icon name="bars" type="font-awesome" color={color} size={20} />
          ) : (
            <Icon name="bars" type="font-awesome" color={color} size={16} />
          )),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default compose(
  withTheme,
  withTranslation(),
)(MainBottomTab);
