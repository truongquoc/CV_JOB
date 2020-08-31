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
import { createDrawerNavigator } from '@react-navigation/drawer';
import mainBottomTab from './routes';
import HomeStack from './containers/Home/index.stack';
import MoreStack from './containers/More/index.stack';
import MyJobsStack from './containers/MyJobs/index.stack';
import ExploreStack from './containers/Explore/index.stack';

const BottomTabs = createDrawerNavigator();

function MainBottomTab(props: any) {
  const { theme: { colors: { bgColor, primary } }, t } = props;
  const loginSelectorData = useSelector((state) => applyObjectSelector(loginSelector, state));
  const isNotLogin = !loginSelectorData.data.get('token');
  const role = loginSelectorData.data.get('role');

  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={mainBottomTab.homeStack}
        component={HomeStack}
      />
      <BottomTabs.Screen
        name={mainBottomTab.briefcaseStack}
        component={MyJobsStack}
      />
      <BottomTabs.Screen
        name={mainBottomTab.exploreStack}
        component={ExploreStack}
      />
      <BottomTabs.Screen
        name={mainBottomTab.moreStack}
        component={MoreStack}
      />
    </BottomTabs.Navigator>
  );
}

export default compose(
  withTheme,
  withTranslation(),
)(MainBottomTab);

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import React from 'react';
// import {Dimensions} from 'react-native';
// import {Color} from '@themes/Theme';
// import propertyStack from './routes';
// import PropretyListCreen from './screens';
// import CustomDrawerContent from './Shared/CustomDrawerContent';
// const {width} = Dimensions.get('window');
// const Drawer = createDrawerNavigator();

// export default class PropertyDrawer extends React.PureComponent{
//     render(){
//         return(
//             <Drawer.Navigator
//             drawerPosition ={right}
//             hideStatusBar
//             drawerStyle = {{
//                 backgroundColor: Color.white,
//                 width: (width *4) /5,
//             }}
//             drawerContent={(props) => <CustomDrawerContent {... props} />} >
//             <Drawer.Screen
//             name={propertyStack.index}
//             component={PropretyListCreen}
//             />
//             </Drawer.Navigator>
//         )
//     }
// }
