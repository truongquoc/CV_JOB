import React, { PureComponent } from 'react';
import { QuickView, Container, Text } from '@components';
import RegisterBackIcon from './Shared/RegisterBackIcon';
import RegisterForm from './Shared/RegisterForm';
import { ScrollView } from 'react-native-gesture-handler';

class RegisterScreen extends PureComponent {
  render() {
    return (
      <Container>
        <QuickView paddingHorizontal={20} backgroundColor="#0E0E0E" flex={1}>
          <ScrollView>
            <RegisterBackIcon />
            <QuickView marginBottom={20} marginTop={130} center>
              <Text
                fontSize={30}
                color="#ffffffff"
                fontWeight="bold"
                style={{
                  // letterSpacing: '1px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontFamily: 'Avenir',
                }}
              >
                FACI
                <Text
                  fontSize={30}
                  color="#28D8A1"
                  fontWeight="bold"
                  style={{
                    // letterSpacing: '1px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontFamily: 'Avenir',
                  }}
                >
                  O
                </Text>
              </Text>
            </QuickView>
            <RegisterForm />
          </ScrollView>
        </QuickView>
      </Container>
    );
  }
}

export default RegisterScreen;
