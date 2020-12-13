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
  Image,
} from '@components';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Icon, Avatar, SearchBar, withTheme } from 'react-native-elements';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import NavigationService from '@utils/navigation';
import rootStack from '@contents/routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { stringifyQuery, TQuery } from '@utils/redux';
import { applyArraySelector, parseArraySelector } from '@utils/selector';
import { setIdIntoParams } from '@utils/appHelper';
import { compose } from 'recompose';
import FastImage from 'react-native-fast-image';
import exploreStack from '../routes';
import { jobGetList } from '../redux/slice';
import { jobListSelector } from '../redux/selector';
import { fetchAllJobs } from '../redux/api';

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};
interface Props {
  list: any;
  getList: (query?: TQuery) => any;
}
const topTab = createMaterialTopTabNavigator();
const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: 200,
    marginLeft: 60,
    marginRight: 60,
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
  },
});

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://s17026.pcdn.co/wp-content/uploads/sites/9/2017/06/AdobeStock_97559781.jpeg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://s17026.pcdn.co/wp-content/uploads/sites/9/2017/06/AdobeStock_97559781.jpeg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    avatar:
      'https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png',
  },
];
const titleList = [
  'All',
  'Moblie',
  'Full stack',
  'Back-end',
  'Font-end',
  'Engineer',
  'See more',
];

interface State {
  slider1ActiveSlide: number;
  search: string;
  page: number;
  listPopularJob: Array<any>;
}
interface Props {
  list: any;
  filterObject: any;
}

class ExploreScreen extends React.Component<Props, State> {
  buttonGroup: any;

  constructor(props: any) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      search: '',
      page: 1,
      listPopularJob: [],
    };
  }

  async componentDidMount() {
    const { getList, filterObject } = this.props;
    const { page } = this.state;
    const payload: TQuery = {
      s: filterObject,
    };
    const getListQuery: TQuery = {
      s: { name: { $gte: 700 } },
    };
    getList(payload);

    const getPopularJob = await fetchAllJobs(stringifyQuery(getListQuery));
    this.setState({ listPopularJob: getPopularJob.data.data });
  }

  onItemPress = (index: number) => {
    const { getList } = this.props;
    const payload: TQuery = {
      s: { name: { $contL: 'mobile' } },
    };
    if (index === 6) {
      // NavigationService.navigate(exploreStack.selectCateScreen);
      NavigationService.navigate(rootStack.exploreStack, {
        screen: exploreStack.selectCateScreen,
      });
    }
    // getList(payload);
  };

  loadMoreData = () => {
    const { getList, filterObject } = this.props;
    const { page } = this.state;
    this.setState({ page: page + 1 });

    const payload: TQuery = {
      limit: 10,
      page,
      s: filterObject,
    };
    getList(payload);
  };

  renderItem = (
    { item, index }: { item: any; index: any },
    parallaxProps: any,
  ) => (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate(rootStack.exploreStack, {
          screen: exploreStack.applicantscreens,
          params: setIdIntoParams(item),
        });
      }}
    >
      <FastImage
        style={{ height: 200 }}
        source={{
          uri: 'https://i.imgur.com/lceHsT6l.jpg',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
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
              uri: item.user.profile.profileUrl,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </QuickView>
        <QuickView flex={4}>
          <Text color="#fff" fontSize={20} fontWeight="bold">
            {item.name}
          </Text>
          <Text color="#fff">{item.user.profile.name}</Text>
        </QuickView>
      </QuickView>
    </TouchableOpacity>
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
        onPress={() => {
          NavigationService.navigate(rootStack.exploreStack, {
            screen: exploreStack.applicantscreens,
            params: setIdIntoParams(item),
          });
        }}
      >
        <QuickView>
          <QuickView row justifyContent="space-between">
            <QuickView row alignItems="center">
              {/* <Avatar source={{ uri: item.user.profile?.profileUrl }} /> */}
              <Image
                source={{ uri: item.user.profile?.profileUrl }}
                resizeMode="contain"
                height={50}
                width={50}
              />
              <Text
                color="#173147"
                fontWeight="bold"
                fontSize={20}
                marginLeft={10}
                style={{ opacity: 0.8 }}
              >
                {item.user.profile?.name}
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
    const { slider1ActiveSlide, search, listPopularJob } = this.state;
    const {
      list: { data },
    } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor="transparent" />
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

          <QuickView
            style={{ backgroundColor: '#fff' }}
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
                onPress={() => {
                  NavigationService.navigate(rootStack.exploreStack, {
                    screen: 'FilterScreen',
                  });
                }}
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
              />
            </QuickView>
          </QuickView>
          {data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={this.renderListJob}
              onEndReached={this.loadMoreData}
              ListHeaderComponent={() => (
                <Carousel
                  containerCustomStyle={{ backgroundColor: '#fff' }}
                  vertical={false}
                  sliderWidth={screenWidth}
                  loop
                  slideStyle={{ width: screenWidth - 30 }}
                  itemWidth={screenWidth - 120}
                  data={listPopularJob}
                  renderItem={this.renderItem}
                />
              )}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() => {
                const { list } = this.props;
                if (list.loading) {
                  return (
                    <QuickView style={{ flex: 1, alignItems: 'center' }}>
                      <ActivityIndicator size="large" color="#ff6a00" />
                    </QuickView>
                  );
                }
                return <></>;
              }}
            />
          ) : (
            <QuickView
              backgroundColor="#fff"
              flex={1}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                source={{
                  uri:
                    'https://www.startupindia.gov.in/content/dam/invest-india/Blogs/404.PNG',
                }}
                style={{ width: '100%' }}
              />
              <QuickView>
                <Text
                  style={{
                    paddingHorizontal: 80,
                    textAlign: 'center',
                    color: '#000',
                  }}
                  bold
                >
                  We have not found jobs for this search at the moment
                </Text>
              </QuickView>
            </QuickView>
          )}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(jobListSelector, state)),
  filterObject: state.job.toJS().setFilter,
});

const mapDispatchToProps = (dispatch: any) => ({
  getList: (query?: TQuery) => dispatch(jobGetList({ query })),
});

const withReduce = connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
});

export default compose(withTheme, withReduce)(ExploreScreen as any);
