/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Icon, withTheme } from 'react-native-elements';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { useSelector } from 'react-redux';
import { applyObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { QuickView, Text } from '@components';
import MyJobTab from './routes';

import AppliedStack from '../Applied/index.stack';
import ViewedStack from '../Viewed/index.stack';
import SavedStack from '../Saved/index.stack';

const Drawer = createDrawerNavigator();

function drawerTab(props: any) {
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
    <Drawer.Navigator>
      <Drawer.Screen name={MyJobTab.viewedStack} component={ViewedStack} />
      <Drawer.Screen name={MyJobTab.savedStack} component={SavedStack} />
      <Drawer.Screen name={MyJobTab.appliedStack} component={AppliedStack} />
    </Drawer.Navigator>
  );
}

export default compose(withTheme, withTranslation())(drawerTab);
