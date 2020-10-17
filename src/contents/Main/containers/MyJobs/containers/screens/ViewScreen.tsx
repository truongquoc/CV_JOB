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
    marginBottom: 20,
  },
});
const jobsSaved = [
  {
    createdat: '2020-10-15T16:29:06.605Z',
    updatedat: '2020-10-15T16:29:06.605Z',
    deletedat: null,
    id: 9,
    name: 'React Native Dev (iOS, Android)~1200$',
    content:
      '{"<ul><li>At least one year of real work experience with React Native, must understand basic philosophy of React Native and React component lifecycle;</li><li>Solid understanding of how to convert design into mobile application, ability to effectively layout to adapt to different screen sizes;</li><li>Experience with state management libraries (Such as Redux), Restful API, Push notification...</li><li>Familiarity with code versioning tools (Such as Git);</li><li>Familiarity with continuous integration;</li><li>Knowing about native programming for android and objective C/ swift is an advantage.</li></ul>"}',
    lowestWage: '465',
    highestWage: '1800',
    description:
      '{"<ul><li>Work as part of a team to build React Native iOS / Android applications.</li><li>Build reusable components for application with near pixel-perfect design.</li><li>Collaborate with a professional team through Scrum meetings every day.</li><li>Improve &amp; Maintain applications with clean code.</li></ul>"}',
    type: 'FULLTIME',
    experience: '2',
    slug: 'react-native-dev-(ios-android)~1200dollar-1602779346604',
    deadline: '2020-09-16',
    expirationDate: false,
    user: {
      createdat: '2020-10-15T16:28:48.286Z',
      updatedat: '2020-10-15T16:28:48.286Z',
      deletedat: null,
      id: '697b4ee1-0a7a-453b-b9a0-3f5dd4032ddb',
      email: 'Heidi99@gmail.com',
      active: true,
      roleId: 4,
      profile: {
        createdat: '2020-10-15T16:28:47.960Z',
        updatedat: '2020-10-15T16:28:47.960Z',
        deletedat: null,
        id: '1fcb301f-f75f-491b-93c3-b0ac84d1d284',
        profileUrl:
          'https://cdn.itviec.com/employers/cloud-technology/logo/w170/QnhXEmpzHa9LYBPgBbfzZx6K/Logo%20Cloud%20Technology_002_cr.jpg',
        pageURL: null,
        cvURL: null,
        name: 'Cloud Technology',
        introduction: 'What makes you special',
        phone: null,
        experience: null,
        quantity: null,
      },
    },
  },
];

class ViewScreen extends PureComponent {
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
        onPress={() => NavigationService.navigate(rootStack.exploreStack, {
          screen: exploreStack.applicantscreens,
        })}
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
    return (
      <Container>
        <QuickView>
          <FlatList
            data={jobsSaved}
            style={styles.listItem}
            renderItem={this.renderListJob}
          />
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);
