/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView,
  Text,
  Container,
  Header,
  Body,
  Image,
  Avatar,
  FlatList,
} from '@components';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import exploreStack from '@contents/Main/containers/Explore/routes';
import NavigationService from '@utils/navigation';
import rootStack from '@contents/routes';
import { myJobsGetRecently } from '../../redux/slice';

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 9,
    backgroundColor: '#ffffff',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginBottom: 30,
  },
});

interface Props {
  getList: () => any;
  myRecentlyJob: any;
}

class ViewScreen extends PureComponent<Props, any> {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  renderListJob = ({ item }: { item: any }) => {
    let typeJob;
    if (item.type === 'FULLTIME') {
      typeJob = (
        <Text
          fontSize={10}
          marginLeft={5}
          style={{
            backgroundColor: '#2DB5FF',
            height: 15,
            color: '#ffffff',
            borderRadius: 3,
            fontWeight: 'bold',
            paddingHorizontal: 3,
          }}
        >
          full time
        </Text>
      );
    } else {
      typeJob = (
        <Text
          fontSize={10}
          marginLeft={5}
          style={{
            backgroundColor: '#e08916',
            height: 15,
            color: '#ffffff',
            borderRadius: 3,
            fontWeight: 'bold',
            paddingHorizontal: 3,
          }}
        >
          part time
        </Text>
      );
    }
    return (
      <TouchableWithoutFeedback
        style={styles.listItem}
        onPress={() =>
          NavigationService.navigate(rootStack.exploreStack, {
            screen: exploreStack.applicantscreens,
          })
        }
      >
        <QuickView>
          <QuickView row justifyContent="space-between">
            <QuickView row alignItems="center" flex={8}>
              <Avatar source={{ uri: item.user.profile.profileUrl }} />
              <Text
                color="#173147"
                fontWeight="bold"
                fontSize={20}
                marginLeft={10}
                style={{ opacity: 0.8 }}
              >
                {item.user.profile.name}
              </Text>
            </QuickView>
            <QuickView flex={1}>
              <Icon type="antdesign" name="hearto" color="#b3296b" />
            </QuickView>
          </QuickView>
          <QuickView marginTop={15}>
            <Text
              color="#1D1D1D"
              fontSize={20}
              fontWeight="bold"
              style={{ letterSpacing: 0.5 }}
              fontFamily="GothamRoundedBold"
            >
              {item.name}
            </Text>
            <Text color="#B5BABD" fontSize={16}>
              Posted on May 24
            </Text>
          </QuickView>
          <QuickView row justifyContent="space-between" marginTop={15}>
            <QuickView row flex={6} alignItems="center">
              <Icon type="entypo" name="location-pin" color="#707070" />
              <Text color="#707070" fontSize={12}>
                417 Wallet Street New York USA
              </Text>
            </QuickView>
            <QuickView flex={2} marginLeft={50} row alignItems="center">
              <Icon
                type="antdesign"
                name="clockcircleo"
                size={16}
                color="#707070"
              />
              {typeJob}
            </QuickView>
          </QuickView>

          <Divider />
          <QuickView marginTop={10}>
            <Text fontSize={20} color="#9c9897">
              Expires on : 29 Oct 2020
            </Text>
          </QuickView>
        </QuickView>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {
      myRecentlyJob: { metadata },
    } = this.props;

    return (
      <Container>
        <QuickView>
          <FlatList data={metadata} renderItem={this.renderListJob} />
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    myRecentlyJob: state.myJobs.toJS().LIST_RECENTLY,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getList: () => dispatch(myJobsGetRecently({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);
