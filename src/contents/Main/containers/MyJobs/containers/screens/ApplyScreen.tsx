/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body,
} from '@components';

class ApplyScreen extends PureComponent {
  render() {
    return (
      <Container>
        {/* <Header title="ApplyScreen" /> */}
        <Body>
          <QuickView>
            <Text center>ApplyScreen</Text>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplyScreen);
