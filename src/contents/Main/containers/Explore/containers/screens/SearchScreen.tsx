import {
  Container,
  FlatList,
  Header,
  QuickView,
  Text,
  Image,
} from '@components';
import { TQuery } from '@utils/redux';
import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { jobGetListSearch } from '../../redux/slice';
import * as _ from 'lodash';
import { applyArraySelector, parseArraySelector } from '@utils/selector';
import { jobListSearchSelector } from '../../redux/selector';
import { Global, setIdIntoParams } from '@utils/appHelper';
import rootStack from '@contents/routes';
import NavigationService from '@utils/navigation';
import exploreStack from '../../routes';
import { isFavorite } from '../../redux/api';

const screenWidth = Math.round(Dimensions.get('window').width);

interface Props {
  getListSearch: any;
  list: any;
}

interface State {
  search: string;
  bookmarks: any;
  page: number;
}

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

class SearchScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
      bookmarks: [],
      page: 1,
    };
  }

  renderCenterComponent = () => {
    const { search } = this.state;
    return (
      <SearchBar
        lightTheme
        // textContentType=""
        containerStyle={{
          borderRadius: 90,
          width: screenWidth - 60,
          height: 50,
          alignContent: 'center',
          alignItems: 'center',
          // marginTop: 20,
          marginLeft: 20,
        }}
        placeholder="Type Here ..."
        round
        leftIconContainerStyle={{
          marginTop: -5,
        }}
        platform="android"
        clearIcon
        returnKeyType="search"
        // containerStyle={styles.containerSearch}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  };

  sendSearchRequest = _.debounce(async (payload) => {
    const { getListSearch } = this.props;
    const objectFilter: any = [];
    objectFilter.push({ name: { $contL: payload } });
    // objectFilter.push({ lowestWage: { $eq: payload } });
    // objectFilter.push({ highestWage: { $eq: payload } });
    objectFilter.push({ 'categories.name': { $contL: payload } });
    objectFilter.push({ 'user.profile.name': { $contL: payload } });
    objectFilter.push({ 'address.description': { $contL: payload } });
    const s = {
      $or: objectFilter,
    };
    getListSearch({ s });
  }, 1200);

  updateSearch = (search: any) => {
    this.setState({ search });
    this.sendSearchRequest(search);
  };

  renderListJob = ({ item }: { item: any }) => {
    const { token } = Global;
    const { bookmarks } = this.state;
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
          <QuickView row justifyContent="space-between" alignItems="center">
            <QuickView row alignItems="center">
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
            {bookmarks.find((bookmark: any) => bookmark == item.id) ? (
              <Icon
                type="antdesign"
                name="heart"
                color="#f05b65"
                backgroundColor="red"
                onPress={async () => {
                  if (!token) {
                    NavigationService.navigate(rootStack.authStack);
                  } else {
                    const tmpArry: any = bookmarks.filter(
                      (bookmark: any) => bookmark != item.id,
                    );
                    this.setState({ bookmarks: tmpArry });
                    await isFavorite(item.id);
                    this.forceUpdate();
                  }
                }}
              />
            ) : (
              <Icon
                type="antdesign"
                name="hearto"
                onPress={async () => {
                  if (!token) {
                    NavigationService.navigate(rootStack.authStack);
                  } else {
                    await isFavorite(item.id);
                    bookmarks.push(item.id);
                    this.forceUpdate();
                  }
                }}
              />
            )}
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

  loadMoreData = () => {
    const { getListSearch } = this.props;
    const { page } = this.state;
    this.setState({ page: page + 1 });

    const payload: TQuery = {
      limit: 10,
      page,
    };
    getListSearch(payload);
  };

  render() {
    const {
      list: { data, metadata },
    } = this.props;
    return (
      <Container>
        <Header
          backIcon
          centerComponent={this.renderCenterComponent()}
          height={100}
          backgroundColor="#a5cbf0"
        />
        <QuickView marginTop={20} marginLeft={20}>
          <Text color="#7d7f82">{metadata.total} jobs matched</Text>
        </QuickView>
        <FlatList
          data={data}
          // onRefresh={(}
          renderItem={this.renderListJob}
          onEndReached={this.loadMoreData}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(jobListSearchSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  getListSearch: (query?: TQuery) => dispatch(jobGetListSearch({ query })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen as any);
