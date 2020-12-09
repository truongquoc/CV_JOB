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
import { QuickView } from '@components';
import LinearGradient from 'react-native-linear-gradient';
import { logout } from '@contents/Auth/containers/Index/Login/redux/slice';
import { Global } from '@utils/appHelper';
import { SidebarRegister } from './shared/SidebarRegister';
import SidabarLoginScreen from './shared/SidebarLogin';

const Drawer = createDrawerNavigator();
interface Props {
  theme: any;
  themeRedux: any;
  updateTheme: (theme: any) => any;
  requireLogin: boolean;
  reduxResetRequireLogin: () => any;
  reduxLogout: () => any;
  loginSelector?: any;
}

interface State {
  barStyle?: any;
  isVisibleBackdrop: boolean;
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
    this.state = {
      isVisibleBackdrop: false,
    };
  }

  toggleModal = () => {
    const { isVisibleBackdrop } = this.state;
    this.setState({
      isVisibleBackdrop: !isVisibleBackdrop,
    });
  };

  render() {
    const { themeRedux, theme, updateTheme } = this.props;
    const { token } = Global;
    /**
     * Handle Switch Theme
     */
    if (themeRedux !== theme.key) {
      const newTheme = lightTheme.key === themeRedux ? lightTheme : darkTheme;
      updateTheme(newTheme);
    }
    const barStyle = themeRedux === ThemeEnum.DARK ? 'dark-content' : 'light-content';
    StatusBar.setBarStyle(barStyle, true);

    return (
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Drawer.Navigator
          drawerContent={(props) => (
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
              colors={['#329AE4', '#5416E6']}
              style={styles.linearGradient}
            >
              <DrawerContentScrollView>
                <QuickView
                  {...props}
                  style={{
                    backgroundColor: '#fcfcfc',
                    marginTop: 150,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  {token ? <SidabarLoginScreen /> : <SidebarRegister />}
                </QuickView>
              </DrawerContentScrollView>
            </LinearGradient>
          )}
        >
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
  reduxLogout: () => dispatch(logout()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(AppNavigator as any));
