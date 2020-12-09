import { Body, Container, Header } from '@components';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class NotificationScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <Body></Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationScreen as any);
