import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-elements';
import { lightTheme, darkTheme } from '@themes';
import {
  themeSelector,
  requireLoginSelector,
} from '@contents/Config/redux/selector';
import { INITIAL_STATE, ThemeEnum } from '@contents/Config/redux/constant';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStack from '@contents/index.navigator';
import NavigationService from '@utils/navigation';
import { resetRequireLogin } from '@contents/Config/redux/slice';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { QuickView, Text, Avatar } from '@components';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import rootStack from '@contents/routes';

const Drawer = createDrawerNavigator();
interface Props {
  theme: any;
  themeRedux: any;
  updateTheme: (theme: any) => any;
  requireLogin: boolean;
  reduxResetRequireLogin: () => any;
}

interface State {
  barStyle: any;
}

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
class AppNavigator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { requireLogin, reduxResetRequireLogin } = this.props;
    if (requireLogin !== INITIAL_STATE.requireLogin) reduxResetRequireLogin();
  }

  render() {
    const { themeRedux, theme, updateTheme } = this.props;
    /**
     * Handle Switch Theme
     */
    if (themeRedux !== theme.key) {
      const newTheme = lightTheme.key === themeRedux ? lightTheme : darkTheme;
      updateTheme(newTheme);
    }
    const barStyle =
      themeRedux === ThemeEnum.DARK ? 'dark-content' : 'light-content';
    StatusBar.setBarStyle(barStyle, true);

    return (
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Drawer.Navigator
          drawerContent={(props) => (
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
              colors={['#329AE4', '#5416E6']}
              style={styles.linearGradient}>
              <DrawerContentScrollView>
                <QuickView
                  {...props}
                  style={{
                    backgroundColor: '#fcfcfc',
                    marginTop: 150,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    containerStyle={{
                      backgroundColor: 'red',
                      position: 'absolute',
                      left: '40%',
                      top: -60,
                      zIndex: 999,
                    }}
                    title="A1"
                  />
                  <QuickView>
                    <QuickView
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cfcccc',
                      }}
                      paddingTop={20}
                      paddingBottom={50}>
                      <Text center color="#241f1f">
                        NGUYEN LAM
                      </Text>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          NavigationService.navigate(rootStack.profileStack, {
                            screen: 'ProfileScreen',
                          });
                        }}>
                        <Text center marginTop={5} color="#4771b5">
                          Edit Profile
                        </Text>
                      </TouchableWithoutFeedback>
                    </QuickView>
                    <QuickView
                      paddingHorizontal={20}
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cfcccc',
                      }}
                      paddingTop={20}
                      paddingBottom={50}>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f">WHO VIEW MY PROFILE</Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          JOB ALERTS
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          NOTIFICATIONS
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          SHARE YOUR PROFILE
                        </Text>
                      </TouchableWithoutFeedback>
                    </QuickView>

                    <QuickView
                      paddingHorizontal={20}
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cfcccc',
                      }}
                      paddingTop={20}
                      paddingBottom={50}>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f">TERMS AND CONDITIONS</Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          PRIVACY POLICY
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          CONTACT US
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20}>
                          FEEDBACK
                        </Text>
                      </TouchableWithoutFeedback>
                    </QuickView>

                    <QuickView
                      paddingHorizontal={20}
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cfcccc',
                      }}
                      paddingTop={20}
                      paddingBottom={50}>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f">LANGUAGE</Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                        <Text color="#241f1f" marginTop={20} fontSize={16}>
                          LOGOUT
                        </Text>
                      </TouchableWithoutFeedback>
                    </QuickView>
                  </QuickView>
                </QuickView>
              </DrawerContentScrollView>
            </LinearGradient>
          )}>
          <Stack.Screen
            name="rootStack"
            component={RootStack}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  themeRedux: themeSelector(state),
  requireLogin: requireLoginSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  reduxResetRequireLogin: () => dispatch(resetRequireLogin()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(AppNavigator as any));
