import React, { PureComponent } from 'react';
import {
  QuickView, Container, Avatar,
} from '@components';
import EmployeeLoginForm from './Shared/EmployeeLoginForm';
import LoginBackIcon from '../../Index/Login/Shared/LoginBackIcon';

class EmployeeLoginScreen extends PureComponent {
  render() {
    return (
      <Container>
        <QuickView paddingHorizontal={20} backgroundImage={{ source: require('@assets/images/loginBackground.png') }}>
          <LoginBackIcon />
          <QuickView marginBottom={20} marginTop={60} center>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri:
      'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883',
              }}
              title="M"
              marginBottom={10}
            />
          </QuickView>
          <EmployeeLoginForm />
        </QuickView>
      </Container>
    );
  }
}

export default EmployeeLoginScreen;
