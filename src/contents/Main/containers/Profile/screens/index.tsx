import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, QuickView, Text, Image } from '@components';
import { Icon } from 'react-native-elements';
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '@utils/navigation';
import { TQuery } from '@utils/redux';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import profileStack from '../routes';
import { profileGetDetail } from '../redux/slice';
import { profileSelector } from '../redux/selector';
import FastImage from 'react-native-fast-image';
import DocumentPicker from 'react-native-document-picker';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  avatar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  informationCard: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

interface Props {
  getDetailProfile: any;
  profile: any;
}
class ProfileScreen extends PureComponent<Props, any> {
  componentDidMount() {
    const { getDetailProfile } = this.props;
    getDetailProfile();
  }

  renderRightComponent = () => (
    <Icon name="more-vertical" type="feather" color="#fff" size={16} />
  );

  renderCenterComponent = () => (
    <Text color="#fff" fontSize={20} fontWeight="bold">
      Profile
    </Text>
  );

  render() {
    const {
      profile: { data, loading },
    } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor="transparent" />
        <Header
          backIcon
          leftColor="#fff"
          backgroundColor="#6ca9e6"
          height={100}
          centerComponent={this.renderCenterComponent()}
          rightComponent={this.renderRightComponent()}
        />
        {loading ? (
          <QuickView style={{ flex: 1, alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#ff6a00" />
          </QuickView>
        ) : (
          <ScrollView>
            <Body>
              <QuickView row alignItems="center">
                <QuickView
                  width={14}
                  height={14}
                  backgroundColor="#3F88EB"
                  style={{ borderRadius: 999 }}
                />
                <Text
                  color="#141B26"
                  fontSize={32}
                  fontWeight="bold"
                  marginLeft={10}
                >
                  {data?.profile?.name}
                </Text>
              </QuickView>
              <QuickView row flex={1}>
                <QuickView
                  flex={3}
                  center
                  onPress={async () => {
                    try {
                      const res = await DocumentPicker.pick({
                        type: [DocumentPicker.types.images],
                      });
                      console.log(
                        res.uri,
                        res.type, // mime type
                        res.name,
                        res.size,
                      );
                    } catch (err) {
                      console.log('err', err);
                      if (DocumentPicker.isCancel(err)) {
                      } else {
                        throw err;
                      }
                    }
                  }}
                >
                  <FastImage
                    style={{ width: 120, height: 150, borderRadius: 5 }}
                    resizeMode="cover"
                    source={{
                      uri: `${
                        data?.profile?.profileUrl
                          ? data.profile.profileUrl
                          : 'https://cdn0.iconfinder.com/data/icons/banking-and-finance-86/100/employee__user__avatar__man__male-512.png'
                      }`,
                    }}
                  />
                </QuickView>
                <QuickView flex={5} paddingLeft={20}>
                  <Text
                    marginTop={20}
                    style={{ opacity: 0.4, alignItems: 'center' }}
                  >
                    <Icon
                      name="phone"
                      type="antdesign"
                      color="#404F68"
                      size={16}
                    />
                    <Text color="#404F68" marginLeft={5}>
                      {data.profile.phone ? data.profile.phone : '012345678'}
                    </Text>
                  </Text>
                  <Text marginTop={20} style={{ opacity: 0.4 }}>
                    <Icon
                      name="location-pin"
                      type="entypo"
                      color="#404F68"
                      size={16}
                    />
                    <Text color="#404F68" marginLeft={5}>
                      Da nang, Viet Nam
                    </Text>
                  </Text>
                  <Text marginTop={20} style={{ opacity: 0.4 }}>
                    <Icon
                      name="mail"
                      type="antdesign"
                      color="#404F68"
                      size={16}
                    />
                    <Text color="#404F68" marginLeft={5}>
                      <Text color="#404F68">{data.email}</Text>
                    </Text>
                  </Text>
                  <QuickView row marginTop={20}>
                    <Icon
                      name="twitter"
                      type="antdesign"
                      color="#404F68"
                      size={16}
                    />
                    <Icon
                      name="facebook-square"
                      type="antdesign"
                      color="#404F68"
                      style={{ marginLeft: 10 }}
                      size={16}
                    />
                    <Icon
                      name="instagram"
                      type="antdesign"
                      style={{ marginLeft: 10 }}
                      color="#404F68"
                      size={16}
                    />
                    <Icon
                      name="google"
                      type="antdesign"
                      style={{ marginLeft: 10 }}
                      color="#404F68"
                      size={16}
                    />
                  </QuickView>
                </QuickView>
              </QuickView>
              <QuickView row>
                <QuickView
                  flex={3}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 30,
                    paddingTop: 20,
                  }}
                >
                  <QuickView
                    backgroundColor="rgba(122, 206, 250, 0.15)"
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                    borderRadius={10}
                  >
                    <Icon
                      name="sharealt"
                      type="antdesign"
                      color="#7ACEFA"
                      size={26}
                    />
                    <Text
                      color="#5A5F69"
                      fontWeight="bold"
                      style={{ letterSpacing: 0.51 }}
                      center
                      fontSize={26}
                    >
                      38
                    </Text>
                    <Text
                      style={{ opacity: 0.4, lineHeight: 22 }}
                      color="#404F68"
                      center
                      fontSize={14}
                    >
                      POSTS
                    </Text>
                  </QuickView>
                </QuickView>
                <QuickView
                  flex={3}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 30,
                    paddingTop: 20,
                  }}
                >
                  <QuickView
                    backgroundColor="#FDF1F3"
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                    borderRadius={10}
                  >
                    <Icon
                      name="user"
                      type="antdesign"
                      color="#E8899E"
                      size={26}
                    />
                    <Text
                      color="#5A5F69"
                      fontWeight="bold"
                      style={{ letterSpacing: 0.51 }}
                      center
                      fontSize={26}
                    >
                      38
                    </Text>
                    <Text
                      style={{ opacity: 0.4, lineHeight: 22 }}
                      color="#404F68"
                      center
                      fontSize={14}
                    >
                      FOLLOWING
                    </Text>
                  </QuickView>
                </QuickView>
                <QuickView
                  flex={3}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 30,
                    paddingTop: 20,
                  }}
                >
                  <QuickView
                    backgroundColor="#FEF6EC"
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                    borderRadius={10}
                  >
                    <Icon
                      name="antdesign"
                      type="antdesign"
                      color="#F7C480"
                      size={26}
                    />
                    <Text
                      color="#5A5F69"
                      fontWeight="bold"
                      style={{ letterSpacing: 0.51 }}
                      center
                      fontSize={26}
                    >
                      38
                    </Text>
                    <Text
                      style={{ opacity: 0.4, lineHeight: 22 }}
                      color="#404F68"
                      center
                      fontSize={14}
                    >
                      FOLLOWER
                    </Text>
                  </QuickView>
                </QuickView>
              </QuickView>
            </Body>
            <QuickView style={styles.informationCard}>
              <QuickView row marginBottom={10} justifyContent="space-between">
                <QuickView row>
                  <Icon
                    name="home"
                    type="antdesign"
                    size={22}
                    color="#377cab"
                  />
                  <Text color="#2c3236" marginLeft={5}>
                    Academic Level
                  </Text>
                </QuickView>
                <Icon
                  name="edit"
                  type="antdesign"
                  size={18}
                  color="#377cab"
                  onPress={() => {
                    NavigationService.navigate(profileStack.educationScreen);
                  }}
                />
              </QuickView>
              <QuickView row></QuickView>
              <QuickView>
                <Text center color="#377cab" fontWeight="bold" marginTop={20}>
                  SEE ALL
                </Text>
              </QuickView>
            </QuickView>

            <QuickView marginTop={10} style={styles.informationCard}>
              <QuickView row marginBottom={10} justifyContent="space-between">
                <Text color="#2c3236">Contact</Text>
                <Icon name="edit" type="antdesign" size={18} color="#377cab" />
              </QuickView>
              <QuickView row alignItems="center">
                <QuickView
                  flex={1}
                  backgroundColor="#9e9991"
                  paddingTop={10}
                  paddingBottom={10}
                  borderRadius={5}
                >
                  <Icon
                    name="contacts"
                    type="antdesign"
                    size={18}
                    color="#fff"
                  />
                </QuickView>
                <QuickView flex={7} marginLeft={10}>
                  <Text color="#2E3137" fontSize={14} fontWeight="bold">
                    Email
                  </Text>
                  <Text color="#377cab">stevejob@gmail.com</Text>
                </QuickView>
              </QuickView>
              <QuickView>
                <Text center color="#377cab" fontWeight="bold" marginTop={20}>
                  SEE ALL
                </Text>
              </QuickView>
            </QuickView>

            <QuickView style={styles.informationCard} marginTop={10}>
              <QuickView marginTop={10}>
                <QuickView row marginBottom={10} justifyContent="space-between">
                  <Text color="#2c3236">Experience</Text>
                  <Icon
                    name="edit"
                    type="antdesign"
                    size={18}
                    color="#377cab"
                  />
                </QuickView>
                <QuickView row alignItems="center">
                  <QuickView
                    flex={1}
                    backgroundColor="#9e9991"
                    paddingTop={10}
                    paddingBottom={10}
                    borderRadius={5}
                  >
                    <Icon
                      name="briefcase"
                      type="entypo"
                      size={18}
                      color="#fff"
                    />
                  </QuickView>
                  <QuickView
                    flex={7}
                    marginLeft={10}
                    style={{ borderLeftWidth: 2, borderColor: '#bfbdb6' }}
                    paddingLeft={5}
                  >
                    <Text color="#2E3137" fontSize={14} fontWeight="bold">
                      Founder at Apple INC
                    </Text>
                    <Text>
                      <Icon
                        name="clockcircleo"
                        type="antdesign"
                        size={16}
                        color="#acf7ab"
                      />
                      <Text color="#377cab">9/2020 - 9/2020</Text>
                    </Text>
                  </QuickView>
                </QuickView>
                <QuickView>
                  <Text center color="#377cab" fontWeight="bold" marginTop={20}>
                    SEE ALL
                  </Text>
                </QuickView>
              </QuickView>
            </QuickView>

            <QuickView style={styles.informationCard} marginTop={10}>
              <QuickView marginTop={10}>
                <QuickView row marginBottom={10} justifyContent="space-between">
                  <QuickView row>
                    <Icon type="entypo" name="network" color="#377cab" />
                    <Text color="#2c3236" t="profile:experience" />
                  </QuickView>
                  <QuickView>
                    <Icon
                      name="edit"
                      type="antdesign"
                      size={18}
                      color="#377cab"
                      onPress={() => {
                        NavigationService.navigate(profileStack.SkillScreen);
                      }}
                    />
                  </QuickView>
                </QuickView>
                <QuickView row alignItems="center">
                  <QuickView
                    flex={1}
                    backgroundColor="#9e9991"
                    paddingTop={10}
                    paddingBottom={10}
                    borderRadius={5}
                  >
                    <Icon
                      name="briefcase"
                      type="entypo"
                      size={18}
                      color="#fff"
                    />
                  </QuickView>
                  <QuickView
                    flex={7}
                    marginLeft={10}
                    style={{ borderLeftWidth: 2, borderColor: '#bfbdb6' }}
                    paddingLeft={5}
                  >
                    <Text color="#2E3137" fontSize={14} fontWeight="bold">
                      Founder at Apple INC
                    </Text>
                    <Text>
                      <Icon
                        name="clockcircleo"
                        type="antdesign"
                        size={16}
                        color="#acf7ab"
                      />
                      <Text color="#377cab">9/2020 - 9/2020</Text>
                    </Text>
                  </QuickView>
                </QuickView>
                <QuickView>
                  <Text center color="#377cab" fontWeight="bold" marginTop={20}>
                    SEE ALL
                  </Text>
                </QuickView>
              </QuickView>
            </QuickView>
          </ScrollView>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  profile: parseObjectSelector(applyObjectSelector(profileSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  getDetailProfile: (query?: TQuery) => dispatch(profileGetDetail({ query })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen as any);
