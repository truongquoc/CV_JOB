/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView,
  Text,
  Container,
  Header,
  Body,
  ParallaxScrollView,
} from '@components';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  Icon,
  Image,
  ListItem,
  Avatar,
  SearchBar,
} from 'react-native-elements';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

interface Props {}
interface State {}
const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};
const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    maxHeight: 150,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: screenWidth - 60,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  containerSearch: {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  imageStyle: {
    flex: 1,
    height: 550,
    resizeMode: 'cover',
  },
  listItem: {
    borderRadius: 9,
    backgroundColor: '#ffffff',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: 20,
  },
});
const list = [
  {
    name: 'Google',
    avatar_url:
      'data:image/png;base64,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',
    address: '417 Wallet Street New York USA',
    department: 'Principle Product Design',
    type: 'parttime',
  },
  {
    name: 'Linkedn',
    avatar_url:
      'https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Microsoft',
    avatar_url:
      'https://cdn.vox-cdn.com/thumbor/VSSwGPlTwiV0AY5zL9Afu7KGpno=/0x28:640x388/1600x900/cdn.vox-cdn.com/assets/1311169/mslogo.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amazon',
    avatar_url:
      'data:image/png;base64,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',
    subtitle: 'Vice Chairman',
  },
];

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

class ExploreScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      search: '',
    };
  }

  renderItem = (
    { item, index }: { item: any; index: any },
    parallaxProps: any,
  ) => (
    <QuickView style={styles.item}>
      <ParallaxImage
        source={{ uri: item.illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      {/* <Text style={styles.title} numberOfLines={2}>
          {item.illustration}
        </Text> */}
    </QuickView>
  );

  renderCenterComponent = () => (
    <QuickView row>
      <Text color="#ffffff" fontSize={20}>
        Vietnam
      </Text>
      <Text marginLeft={5} fontWeight="bold" color="#ffffff" fontSize={20}>
        works
      </Text>
    </QuickView>
  );

  renderRightComponent = () => (
    <QuickView row alignItems="center">
      <QuickView>
        <Icon type="feather" name="bell" size={16} color="#ffffff" />
      </QuickView>
      <QuickView marginLeft={10}>
        <Icon type="antdesign" name="mail" color="#ffffff" />
      </QuickView>
    </QuickView>
  );

  render() {
    const { slider1ActiveSlide, search } = this.state;
    return (
      <Container>
        <ImageBackground
          style={styles.imageStyle}
          source={{
            uri:
              'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        >
          <Header
            backgroundColor="transparent"
            leftComponent={<Icon type="entypo" name="menu" color="#ffffff" />}
            centerComponent={this.renderCenterComponent()}
            rightComponent={this.renderRightComponent()}
          />
          <ScrollView>
            <QuickView marginBottom={100} />
            <QuickView
              style={{ backgroundColor: 'white' }}
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
            >
              <QuickView>
                <SearchBar
                  lightTheme
                  placeholder="Type Here..."
                  round
                  searchIcon={
                    <Icon type="antdesign" name="search1" color="#5760EB" />
                  }
                  leftIconContainerStyle={{}}
                  platform="android"
                  clearIcon
                  containerStyle={styles.containerSearch}
                  // onChangeText={this.updateSearch}
                  value={search}
                />
              </QuickView>
              <QuickView row marginTop={10}>
                <QuickView>
                  <QuickView />
                  {/* <Text>Accounting</Text> */}
                </QuickView>
              </QuickView>
              <Carousel
                vertical={false}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 60}
                data={ENTRIES1}
                autoplay
                renderItem={this.renderItem}
                hasParallaxImages
              />
              <Body>
                <QuickView>
                  {list.map((l, i) => (
                    <QuickView key={i.toString()} style={styles.listItem}>
                      <QuickView>
                        <QuickView row justifyContent="space-between">
                          <QuickView row alignItems="center">
                            <Avatar source={{ uri: l.avatar_url }} />
                            <Text
                              color="#173147"
                              fontWeight="bold"
                              fontSize={20}
                              marginLeft={10}
                              style={{ opacity: 0.8 }}
                            >
                              {l.name}
                            </Text>
                          </QuickView>
                          <Icon type="material" name="favorite-border" />
                        </QuickView>
                        <QuickView marginTop={15}>
                          <Text
                            color="#1D1D1D"
                            fontSize={20}
                            fontWeight="bold"
                            style={{ letterSpacing: 0.5 }}
                            fontFamily="GothamRoundedBold"
                          >
                            Full Stack Ruby on Rails
                          </Text>
                          <Text color="#B5BABD" fontSize={16}>
                            Posted on May 24
                          </Text>
                        </QuickView>
                        <QuickView
                          row
                          justifyContent="space-between"
                          marginTop={15}
                        >
                          <QuickView row flex={6} alignItems="center">
                            <Icon
                              type="entypo"
                              name="location-pin"
                              color="#707070"
                            />
                            <Text color="#707070" fontSize={12}>
                              417 Wallet Street New York USA
                            </Text>
                          </QuickView>
                          <QuickView
                            flex={2}
                            marginLeft={50}
                            row
                            alignItems="center"
                          >
                            <Icon
                              type="antdesign"
                              name="clockcircleo"
                              size={16}
                              color="#707070"
                            />
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
                          </QuickView>
                        </QuickView>
                      </QuickView>
                    </QuickView>
                  ))}
                </QuickView>
              </Body>
            </QuickView>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
