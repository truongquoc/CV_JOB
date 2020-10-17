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
import { StyleSheet } from 'react-native';
import NavigationService from '@utils/navigation';
import exploreStack from '@contents/Main/containers/Explore/routes';
import rootStack from '@contents/routes';
import { Divider, Icon } from 'react-native-elements';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

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
    createdat: '2020-10-15T16:29:06.720Z',
    updatedat: '2020-10-15T16:29:06.720Z',
    deletedat: null,
    id: 19,
    name: 'Android Developer (All Level)',
    content: '{}',
    lowestWage: '500',
    highestWage: '2200',
    description: '{}',
    type: 'FULLTIME',
    experience: '7',
    slug: 'android-developer-(all-level)-1602779346718',
    deadline: '2020-09-27',
    expirationDate: false,
    user: {
      createdat: '2020-10-15T16:28:47.307Z',
      updatedat: '2020-10-15T16:28:47.307Z',
      deletedat: null,
      id: '756abf89-9650-4010-97b6-4cea8e1f8e2a',
      email: 'Katelyn.Wiegand@hotmail.com',
      active: true,
      roleId: 4,
      profile: {
        createdat: '2020-10-15T16:28:46.983Z',
        updatedat: '2020-10-15T16:28:46.983Z',
        deletedat: null,
        id: 'fce3690b-ce08-4c79-b8d7-74c0340d7af0',
        profileUrl:
          'https://cdn.itviec.com/employers/toshiba-software-development-viet-nam-co-ltd/logo/w170/qmEermNPcp6FuQfTvY7J91na/toshiba-software-development-viet-nam-co-ltd-logo.png',
        pageURL: null,
        cvURL: null,
        name: 'Toshiba Software Development (Viet Nam) Co, Ltd',
        introduction: 'What makes you special',
        phone: null,
        experience: null,
        quantity: null,
      },
    },
  },
  {
    createdat: '2020-10-15T16:29:06.888Z',
    updatedat: '2020-10-15T16:29:06.888Z',
    deletedat: null,
    id: 33,
    name: 'Senior Mobile (iOS/Android/React Native)',
    content:
      '{"<ul><li>At least intermediate level of English level</li><li>Ability to self-learn and adapt to new technologies quickly</li><li>Performs effectively &amp; independently in software implementation activities (designing, coding, verification, unit testing, integration testing, and debugging…)</li></ul>","<ul><li>3+ years of experience in iOS/Android and mobile development</li><li>Strong experience in Swift/Kotlin/Java, Room database</li><li>Experience in fragment and activity lifecycle</li><li>Experience with technical design including mobile application (MVP) architectures pattern, strong understanding of object-oriented design</li></ul>","<ul><li>Experience in handling the performance and memory of mobile App</li></ul>","<ul><li>Strong experience with React Native</li><li>Good understanding of HTML5, CSS3 and JavaScript</li><li>Comfortable in building a single page application including front-end routing, 2-way data binding, client-side rendering and JSON-based RESTful APIs</li><li>Practice knowledge of website optimization techniques and fast page load times</li><li>Passionate about building a great UI/UX apps</li></ul>","<ul><li>Experience with JavaScript frameworks/libraries which are more powerful than jQuery (e.g. ReactJS/Angular)</li><li>Experience in Android/iOS native development (Java, Kotlin, Swift, Objective C)</li></ul>"}',
    lowestWage: '465',
    highestWage: '1600',
    description:
      '{"<ul><li>Love Coding.</li><li>Follow Your Passion.</li><li>Enjoy Every Single Working Day with Your Nice Colleagues and Our Kind Clients.</li><li>Take Your Skill to the Next Level.</li></ul>"}',
    type: 'FULLTIME',
    experience: '8',
    slug: 'senior-mobile-(iosandroidreact-native)-1602779346886',
    deadline: '2020-09-26',
    expirationDate: false,
    user: {
      createdat: '2020-10-15T16:28:47.632Z',
      updatedat: '2020-10-15T16:28:47.632Z',
      deletedat: null,
      id: 'f9c05683-9067-485a-b8df-a17f30c0766f',
      email: 'Mayra41@hotmail.com',
      active: true,
      roleId: 4,
      profile: {
        createdat: '2020-10-15T16:28:47.312Z',
        updatedat: '2020-10-15T16:28:47.312Z',
        deletedat: null,
        id: '3cfa6b36-158e-40ce-9b05-ebf529aa64e4',
        profileUrl:
          'https://cdn.itviec.com/employers/kaiyouit/logo/w170/K419Abk6YWePJbwZfEQWwELs/KaiyouIT_Logo.png',
        pageURL: null,
        cvURL: null,
        name: 'KaiyouIT',
        introduction: 'What makes you special',
        phone: null,
        experience: null,
        quantity: null,
      },
    },
  },
];

class SaveScreen extends PureComponent {
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

export default connect(mapStateToProps, mapDispatchToProps)(SaveScreen);
