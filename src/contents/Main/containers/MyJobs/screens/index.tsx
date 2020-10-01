/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, ParallaxScrollView, Image,
} from '@components';
import MyJobTopTab from '../containers/index.toptab';

class MyJobScreen extends PureComponent {
  render() {
    return (
      <Container>
        <ParallaxScrollView>
          <Body>
            <MyJobTopTab />
          </Body>
        </ParallaxScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyJobScreen);
