import {
  Container,
  Header,
  ParallaxScrollView,
  QuickView,
  Text,
} from '@components';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
import { ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { jobDetailSelector } from '../../redux/selector';
import CompanyTopTabs from './TopTabsCompany';

interface Props {
  detail: any;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export class CompanyDetailScreen extends PureComponent<Props, any> {
  render() {
    const {
      detail: { data, loading },
    } = this.props;
    return (
      <Container>
        <QuickView>
          <ImageBackground source={{ uri: data.introImg }} style={styles.image}>
            <QuickView style={styles.child}></QuickView>
          </ImageBackground>
          <QuickView
            row
            position="absolute"
            bottom={0}
            center
            style={{ zIndex: 999 }}
          >
            <QuickView flex={1}>
              <FastImage
                style={{ height: 60, width: 60 }}
                source={{
                  uri: data.user.profile.profileUrl,
                  headers: { Authorization: 'someAuthToken' },
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </QuickView>
            <QuickView flex={4}>
              <Text color="#fff" fontSize={20} fontWeight="bold">
                {data.name}
              </Text>
              <Text color="#fff">{data.user.profile.name}</Text>
            </QuickView>
          </QuickView>
        </QuickView>
        <CompanyTopTabs />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  detail: parseObjectSelector(applyObjectSelector(jobDetailSelector, state)),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyDetailScreen as any);
