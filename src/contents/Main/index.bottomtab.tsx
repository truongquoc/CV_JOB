/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Icon, withTheme } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bottomNavigationBarHeight, shadowViewLight } from '@themes/ThemeComponent/Common/CommonProps';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { lightTheme } from '@themes';
import { useSelector } from 'react-redux';
import { applyObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { StyleSheet } from 'react-native';
import mainBottomTab from './routes';
import HomeStack from './containers/Home/index.stack';
import MoreStack from './containers/More/index.stack';
import MyJobsStack from './containers/MyJobs/index.stack';
import ExploreStack from './containers/Explore/index.stack';

const BottomTabs = createBottomTabNavigator();

function MainBottomTab(props: any) {
  const { theme: { colors: { bgColor, primary } }, t } = props;
  const loginSelectorData = useSelector((state) => applyObjectSelector(loginSelector, state));
  const isNotLogin = !loginSelectorData.data.get('token');
  const role = loginSelectorData.data.get('role');

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: true,
        activeTintColor: primary,
        inactiveTintColor: primary,
        style: StyleSheet.flatten([
          {
            height: bottomNavigationBarHeight,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 5,
            borderTopColor: 'transparent',
            padding: 10,
            backgroundColor: bgColor,
          },
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
          },
        ]),
        tabStyle: {
          backgroundColor: bgColor,
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
        name={mainBottomTab.briefcaseStack}
        component={MyJobsStack}
        options={{
          tabBarLabel: t('bottom_tab:My Job'),
          tabBarIcon: ({ focused, color, size }) => (focused ? (
            <Icon
              name="briefcase"
              type="material-community"
              color={color}
              size={26}
            />
          ) : (
            <Icon name="briefcase-outline" type="material-community" color={color} size={22} />
          )),
        }}
      />
      <BottomTabs.Screen
        name={mainBottomTab.exploreStack}
        component={ExploreStack}
        options={{
          tabBarLabel: t('bottom_tab:Explore'),
          tabBarIcon: ({ focused, color, size }) => (focused ? (
            <Icon
              name="newspaper"
              type="material-community"
              color={color}
              size={26}
            />
          ) : (
            <Icon name="newspaper" type="material-community" color={color} size={22} />
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
