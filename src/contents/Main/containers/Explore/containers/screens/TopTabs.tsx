import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { withTheme } from 'react-native-elements';
import detailJobTopTab from '../routes';
import { InformationScreen } from './InformationScreen';
import { CompanyScreen } from './CompanyScreen';
import { RelatedJobScreen } from './RelatedJobScreen';

const TopTab = createMaterialTopTabNavigator();

function MyJobTopTab() {
  return (
    <TopTab.Navigator
      tabBarOptions={{ labelStyle: { fontSize: 12, width: 100 } }}
    >
      <TopTab.Screen
        options={{ tabBarLabel: 'Information' }}
        name={detailJobTopTab.jobInformationScreen}
        component={InformationScreen}
      />
      <TopTab.Screen
        options={{ tabBarLabel: 'Company' }}
        name={detailJobTopTab.companySreens}
        component={CompanyScreen}
      />
      <TopTab.Screen
        options={{ tabBarLabel: 'Related Job' }}
        name={detailJobTopTab.relatedJobScreens}
        component={RelatedJobScreen}
      />
    </TopTab.Navigator>
  );
}

export default compose(withTheme, withTranslation())(MyJobTopTab);
