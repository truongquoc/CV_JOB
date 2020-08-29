import React, { PureComponent } from 'react';
import { QuickView, Container, Text, Image } from '@components';
import EmployeeLoginForm from './Shared/EmployeeLoginForm';
import LoginBackIcon from '../../Index/Login/Shared/LoginBackIcon';

class EmployeeLoginScreen extends PureComponent {
  render() {
    return (
      <Container>
        <QuickView paddingHorizontal={20} backgroundColor="#0E0E0E" flex={1}>
          <LoginBackIcon />
          <QuickView alignItems="center" marginTop={30}>
            <Image
              source={require('@assets/images/illustration.png')}
              width={232}
            />
          </QuickView>
          <QuickView marginBottom={20} marginTop={30} center>
            <Text
              fontSize={30}
              color="#ffffffff"
              fontWeight={'bold'}
              style={{
                // letterSpacing: '1px',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontFamily: 'Avenir',
              }}>
              FACI
              <Text
                fontSize={30}
                color="#28D8A1"
                fontWeight={'bold'}
                style={{
                  // letterSpacing: '1px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontFamily: 'Avenir',
                }}>
                O
              </Text>
            </Text>
          </QuickView>
          <EmployeeLoginForm />
        </QuickView>
      </Container>
    );
  }
}

export default EmployeeLoginScreen;
