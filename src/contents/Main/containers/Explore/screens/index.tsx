/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView,
  Text,
  Container,
  Header,
  Body,
  ButtonGroup,
  Button,
  FlatList,
} from '@components';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Icon, Avatar, SearchBar } from 'react-native-elements';
import { StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '@utils/navigation';
import rootStack from '@contents/routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TQuery } from '@utils/redux';
import { applyArraySelector, parseArraySelector } from '@utils/selector';
import exploreStack from '../routes';
import { jobGetList } from '../redux/slice';
import { jobListSelector } from '../redux/selector';

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};
interface Props {
  list: any;
  getList: any;
}
const topTab = createMaterialTopTabNavigator();
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
    paddingHorizontal: 10,
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

class ExploreScreen extends React.Component<Props, any> {
  buttonGroup: any;

  onItemPress: ((index: number) => any) | undefined;

  constructor(props: any) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      search: '',
    };
  }

  componentDidMount() {
    const { getList } = this.props;
    const payload: TQuery = {
      limit: 10,
      page: 1,
    };
    getList(payload);
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
      <QuickView
        style={styles.listItem}
        onPress={() => NavigationService.navigate(rootStack.exploreStack, {
          screen: exploreStack.applicantscreens,
        })}
      >
        <QuickView>
          <QuickView row justifyContent="space-between">
            <QuickView row alignItems="center">
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
            <Icon type="material" name="bookmark-border" />
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
        </QuickView>
      </QuickView>
    );
  };

  render() {
    const { slider1ActiveSlide, search } = this.state;
    const { list } = this.props;

    const testList = [];
    const titleList = [
      'All',
      'Moblie',
      'Full stack',
      'Back-end',
      'Font-end',
      'Engineer',
      'See more',
    ];
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
                  placeholder="Type Here ..."
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
              <QuickView row marginTop={15} paddingHorizontal={20}>
                <QuickView flex={6}>
                  <Text color="#707070" fontFamily="GothamRoundedBold">
                    Top Companies
                  </Text>
                </QuickView>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => NavigationService.navigate(rootStack.exploreStack, {
                    screen: 'FilterScreen',
                  })}
                >
                  <Icon type="material" name="tune" color="#707070" />
                </TouchableOpacity>
              </QuickView>
              <QuickView>
                <ButtonGroup
                  marginHorizontal={15}
                  ref={(ref: any) => {
                    this.buttonGroup = ref;
                  }}
                  titleList={titleList}
                  onItemPress={this.onItemPress}
                  defaultActiveIndex={2}
                  propsChange={false}
                  outline={false}
                  activeBackgroundColor="#9EB6FF"
                  backgroundColor="#FFFF"
                  titleColor="#707070"
                  activeTitleColor="#FFF"
                  // buttonStyle={{
                  //   backgroundColor: '',
                  // }}
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
              <QuickView>
                <FlatList
                  data={list.data}
                  style={styles.listItem}
                  renderItem={this.renderListJob}
                />
              </QuickView>
            </QuickView>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(jobListSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  getList: (query?: TQuery) => dispatch(jobGetList({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
