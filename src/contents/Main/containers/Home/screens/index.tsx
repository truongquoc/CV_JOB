/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import {
//   QuickView, Text, Container, Header, Body,
// } from '@components';

// class HomeScreen extends PureComponent {
//   render() {
//     return (
//       <Container>
//         <Header title="HOME" />
//         <Body>
//           <QuickView>
//             <Text center>Home</Text>
//           </QuickView>
//         </Body>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = (state: any) => ({

// });

// const mapDispatchToProps = (dispatch: any) => ({

// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleStack from '@contents/Example/index.stack';
import homeStack from '../routes';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={homeStack.index} component={ExampleStack} />
    </Stack.Navigator>
  );
}
