import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Container, Header, Body, QuickView, Text, Image,
} from '@components';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// const list = [
//   {
//     title: 'Appointments',
//     icon: 'av-timer',
//   },
//   {
//     title: 'Trips',
//     icon: 'flight-takeoff',
//   },
// ];
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
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10.32,

    elevation: 3,

  },
});
export class ProfileScreen extends PureComponent {
  render() {
    return (
      <Container>
        {/* <QuickView height={200}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            colors={['#329AE4', '#5416E6']}
            style={styles.linearGradient}>
            <Header
              backIcon
              backgroundColor="none"
              height={100}
              rightComponent={
                <Icon
                  name="downcircleo"
                  type="antdesign"
                  color="#28D8A1"
                  size={16}
                />
              }
            />
          </LinearGradient>
          <QuickView style={styles.avatar}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              marginBottom={10}
              title="A1"
            />
          </QuickView>
        </QuickView> */}
        <Header
          backIcon
          leftColor="#404F68"
          backgroundColor="none"
          height={100}
          rightComponent={(
            <Icon
              name="downcircleo"
              type="antdesign"
              color="#28D8A1"
              size={16}
            />
              )}
        />
        <ScrollView>
          <Body>
            <QuickView row alignItems="center">
              <QuickView width={14} height={14} backgroundColor="#3F88EB" style={{ borderRadius: 999 }} />
              <Text color="#141B26" fontSize={32} fontWeight="bold" marginLeft={10}>Anna Johnson</Text>
            </QuickView>
            <QuickView row>
              <QuickView flex={3}>
                <Image
                  width={null}
                  height={200}
                  resizeMode="cover"
                  source={{ uri: 'https://fabricegrinda.com/wp-content/uploads/2013/07/Steve-Jobs-1440x960-1.jpg' }}
                />
              </QuickView>
              <QuickView flex={5} paddingLeft={20} paddingTop={20}>
                <Text color="#535D7E" fontSize={20}>Creative designer from UXDesigner</Text>
                <Text marginTop={20} style={{ opacity: 0.4 }}>
                  <Icon
                    name="location-pin"
                    type="entypo"
                    color="#404F68"
                    size={16}
                  />
                  <Text color="#404F68">Da nang, Viet Nam</Text>
                </Text>
                <Text marginTop={20} style={{ opacity: 0.4 }}>
                  <Icon
                    name="mail"
                    type="antdesign"
                    color="#404F68"
                    size={16}
                  />
                  <Text color="#404F68">
                    {' '}
                    <Text color="#404F68">Stevejob@gmail.com</Text>
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
                  style={{ paddingTop: 10, paddingBottom: 30 }}
                >
                  <Icon name="user" type="antdesign" color="#7ACEFA" size={26} />
                  <Text
                    color="#141B26"
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
                  style={{ paddingTop: 10, paddingBottom: 30 }}
                >
                  <Icon name="user" type="antdesign" color="#E8899E" size={26} />
                  <Text
                    color="#141B26"
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
                  backgroundColor="#FEF6EC"
                  style={{ paddingTop: 10, paddingBottom: 30 }}
                >
                  <Icon name="user" type="antdesign" color="#F7C480" size={26} />
                  <Text
                    color="#141B26"
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
            </QuickView>

          </Body>
          <QuickView style={styles.informationCard}>
            <QuickView row marginBottom={10} justifyContent="space-between">
              <Text color="#2c3236">Education</Text>
              <Icon name="edit" type="antdesign" size={18} color="#377cab" />
            </QuickView>
            <QuickView row alignItems="center">
              <QuickView flex={2} backgroundColor="#9e9991" paddingTop={10} paddingBottom={10} borderRadius={5}>
                <Icon name="home" type="antdesign" size={36} color="#fff" />
              </QuickView>
              <QuickView flex={7} marginLeft={10}>
                <Text color="#2E3137" fontSize={14} fontWeight="bold">Truong Dai hoc Bach khoa Da Nang </Text>
                <Text color="#5A5F69">2017-2022</Text>
              </QuickView>
            </QuickView>
            <QuickView>
              <Text center color="#377cab" fontWeight="bold" marginTop={20}>SEE ALL</Text>
            </QuickView>
          </QuickView>

          <QuickView marginTop={10} style={styles.informationCard}>
            <QuickView row marginBottom={10} justifyContent="space-between">
              <Text color="#2c3236">Contact</Text>
              <Icon name="edit" type="antdesign" size={18} color="#377cab" />
            </QuickView>
            <QuickView row alignItems="center">
              <QuickView flex={2} backgroundColor="#9e9991" paddingTop={10} paddingBottom={10} borderRadius={5}>
                <Icon name="contacts" type="antdesign" size={36} color="#fff" />
              </QuickView>
              <QuickView flex={7} marginLeft={10}>
                <Text color="#2E3137" fontSize={14} fontWeight="bold">Email</Text>
                <Text color="#377cab">stevejob@gmail.com</Text>
              </QuickView>
            </QuickView>
            <QuickView>
              <Text center color="#377cab" fontWeight="bold" marginTop={20}>SEE ALL</Text>
            </QuickView>
          </QuickView>

          <QuickView style={styles.informationCard} marginTop={10}>
            <QuickView marginTop={10}>
              <QuickView row marginBottom={10} justifyContent="space-between">
                <Text color="#2c3236">Experience</Text>
                <Icon name="edit" type="antdesign" size={18} color="#377cab" />
              </QuickView>
              <QuickView row alignItems="center">
                <QuickView flex={2} backgroundColor="#9e9991" paddingTop={10} paddingBottom={10} borderRadius={5}>
                  <Icon name="briefcase" type="entypo" size={36} color="#fff" />
                </QuickView>
                <QuickView flex={7} marginLeft={10} style={{ borderLeftWidth: 2, borderColor: '#bfbdb6' }} paddingLeft={5}>
                  <Text color="#2E3137" fontSize={14} fontWeight="bold">Founder at Apple INC</Text>
                  <Text>
                    <Icon name="clockcircleo" type="antdesign" size={16} color="#acf7ab" />
                    {' '}
                    <Text color="#377cab">9/2020 - 9/2020</Text>
                  </Text>
                </QuickView>
              </QuickView>
              <QuickView>
                <Text center color="#377cab" fontWeight="bold" marginTop={20}>SEE ALL</Text>
              </QuickView>
            </QuickView>

          </QuickView>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
