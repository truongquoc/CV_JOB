/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body,
} from '@components';

class SavedScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Header title="Saved" />
        <Body>
          <QuickView>
            <Text center>Saved Screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedScreen);
