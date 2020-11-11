import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import detailStack from './routes';
import ApplicantScreens from './screens/ApplicantDetail';
import EmployerScreens from './screens/EmployerDetail';

const Stack = createStackNavigator();

// export default function ProductStack() {
//   return (
//     <Stack.Navigator headerMode="none">
//       <Stack.Screen
//         name={detailStack.applicantscreens}
//         component={ApplicantScreens}
//       />
//       <Stack.Screen
//         name={detailStack.employerscreens}
//         component={EmployerScreens}
//       />
//     </Stack.Navigator>
//   );
// }
