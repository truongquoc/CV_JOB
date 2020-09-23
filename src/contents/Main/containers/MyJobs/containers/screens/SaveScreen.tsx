/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, Image,
} from '@components';

class SaveScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Image
          source={{
            uri: 'http://picsum.photos/1000/1000',
            cache: 'web',
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SaveScreen);
