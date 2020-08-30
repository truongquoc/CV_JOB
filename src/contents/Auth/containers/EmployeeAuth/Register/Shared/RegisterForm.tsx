import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import { applyObjectSelector } from '@utils/selector';
import { TObjectRedux } from '@utils/redux';
import { Color } from '@themes/Theme';
import { withTheme, Icon } from 'react-native-elements';
import {
  QuickView, TextError, AuthButton, Text,
} from '@components';
import AuthInput from '@contents/Auth/containers/Index/Shared/AuthInput';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import authStack from '@contents/Auth/containers/routes';
import NavigationService from '@utils/navigation';
import rootStack from '@contents/routes';
import { ILogInInput } from '../redux/model';
import { login, logout } from '../redux/slice';
import { loginSelector } from '../redux/selector';

interface Props {
  loginData: TObjectRedux;
  reduxLogin: (data: ILogInInput) => any;
  theme?: any;
}
interface State {
  check: boolean;
}
class RegisterForm extends PureComponent<Props, State> {
  private email: any;

  private password: any;

  private name: any;

  private confirmPassword: any;

  constructor(props: any) {
    super(props);
    this.state = {
      check: false,
    };
  }

  render() {
    const { loginData, reduxLogin } = this.props;
    const { check } = this.state;
    return (
      <>
        <TextError error={loginData.error} color="#FA8072" />
        <AuthInput
          ref={(ref: any) => {
            this.email = ref;
          }}
          leftIcon={{ name: 'email-outline', color: '#ffffff' }}
          placeholder="Email"
          fontSize={10}
          validationField="email"
          color="#ffffff"
          keyboardType="email-address"
          backgroundColor="#343434"
        />
        <AuthInput
          ref={(ref: any) => {
            this.name = ref;
          }}
          leftIcon={{ name: 'user', color: '#ffffff', type: 'antdesign' }}
          placeholder="Name"
          color="#ffffff"
          marginTop={10}
          keyboardType="email-address"
          backgroundColor="#343434"
        />
        <AuthInput
          ref={(ref: any) => {
            this.password = ref;
          }}
          leftIcon={{ name: 'lock-outline', color: '#ffffff' }}
          textContentType="oneTimeCode"
          placeholder="Password"
          color="#ffffff"
          rightIconColor="#28D8A1"
          validationField="password"
          onSubmitEditing={() => Keyboard.dismiss()}
          blurOnSubmit={false}
          secureTextEntry
          marginVertical={10}
          backgroundColor="#343434"
        />
        <AuthInput
          ref={(ref: any) => {
            this.password = ref;
          }}
          leftIcon={{ name: 'lock-outline', color: '#ffffff' }}
          textContentType="oneTimeCode"
          placeholder="Confirm Password"
          color="#ffffff"
          rightIconColor="#28D8A1"
          validationField="password"
          onSubmitEditing={() => Keyboard.dismiss()}
          blurOnSubmit={false}
          secureTextEntry
          marginVertical={10}
          backgroundColor="#343434"
        />

        <QuickView row justifyContent="space-between">
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ check: !check });
            }}
          >
            <QuickView row alignItems="center">
              {check ? (
                <Icon
                  name="downcircleo"
                  type="antdesign"
                  color="#28D8A1"
                  size={16}
                />
              ) : (
                <Icon name="circle" type="entypo" color="#28D8A1" size={16} />
              )}
              <Text marginLeft={5} color="#bbbbbb" t="auth:terms" />
            </QuickView>
          </TouchableWithoutFeedback>
        </QuickView>
        <QuickView marginTop={30}>
          <AuthButton
            t="auth:register"
            // onPress={this.onSignIn}
            color={Color.white}
            backgroundColor="#28d8a1"
            shadow
            onPress={() => {
              reduxLogin({
                email: this.email.getText(),
                password: this.password.getText(),
              });
            }}
            loading={loginData.loading}
          />
        </QuickView>
        <QuickView row center>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(rootStack.authStack, {
                screen: authStack.jobSeekerRegisterScreen,
              });
            }}
          >
            <Text t="auth:forgot" color="#28D8A1" marginLeft={5} />
          </TouchableOpacity>
        </QuickView>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loginData: applyObjectSelector(loginSelector, state),
});

const mapDispatchToProps = (dispatch: any) => ({
  reduxLogin: (data: ILogInInput) => dispatch(login({ data })),
  reduxLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(RegisterForm as any));
