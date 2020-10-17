/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, Image,
} from '@components';
import { StatusBar } from 'react-native';
import MyJobTopTab from '../containers/index.toptab';

class MyJobScreen extends PureComponent {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <StatusBar backgroundColor="transparent" />

        <Header
          backgroundColor="#a5cbf0"
          style={{ opacity: 0.1 }}
          // containerStyle={{ opacity: 0.2, height: 100 }}
        />
        <MyJobTopTab />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyJobScreen);
