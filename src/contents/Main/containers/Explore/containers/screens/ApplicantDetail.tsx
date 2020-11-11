/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView,
  Text,
  Container,
  Header,
  Body,
  ParallaxScrollView,
  Image,
  Button,
} from '@components';
import { Icon, Divider, withTheme } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getIdFromParams } from '@utils/appHelper';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { requireLoginSelector } from '@contents/Config/redux/selector';
import SaveIcon from '../Shared/SaveIcon';
import TopTabs from './TopTabs';
import { jobGetDetail } from '../../redux/slice';
import { jobDetailSelector } from '../../redux/selector';

interface Props {
  getDetail: (id: number) => any;
  detail: any;
  requireLogin?: boolean;
  loginSelectorData?: any;
}
class ApplicantScreens extends PureComponent<Props> {
  DateDiff = {
    inHours(d1: number, d2: number) {
      return Math.floor((d2 - d1) / (3600 * 1000));
    },
    inMinutes(d1: number, d2: number) {
      return Math.floor((d2 - d1) / (60 * 1000));
    },
    inDays(d1: number, d2: number) {
      return Math.floor((d2 - d1) / (24 * 3600 * 1000));
    },
    inMonth(d1: number, d2: number) {
      return Math.floor((d2 - d1) / (30 * 24 * 3600 * 1000));
    },
  };

  componentDidMount() {
    const { getDetail } = this.props;
    getDetail(getIdFromParams(this.props));
  }

  render() {
    const { requireLogin, loginSelectorData } = this.props;
    const token = loginSelectorData.data.get('token');
    let datediff;
    const {
      detail: { data },
    } = this.props;
    if (
      this.DateDiff.inMinutes(
        new Date(data.data.createdat).getTime(),
        new Date().getTime(),
      ) < 60
    ) {
      datediff = this.DateDiff.inMinutes(
        new Date(data.data.createdat).getTime(),
        new Date().getTime(),
      );
    } else if (
      this.DateDiff.inHours(
        new Date(data.data.createdat).getTime(),
        new Date().getTime(),
      ) < 24
    ) {
      this.DateDiff.inHours(
        new Date(data.data.createdat).getTime(),
        new Date().getTime(),
      );
    } else {
      console.log(
        'her',
        this.DateDiff.inDays(
          new Date(data.data.createdat).getTime(),
          new Date().getTime(),
        ),
      );
    }

    return (
      <Container>
        <ParallaxScrollView
          parallaxHeaderHeight={200}
          backgroundImageSource={{
            uri:
              'https://m.foolcdn.com/media/dubs/images/young_professionals.f065c757.fill-800x373.jpegquality-50.jpg',
          }}
          renderStickyHeader={() => <Header backgroundColor="transparent" />}
        >
          <Body>
            <Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1118574145724399616/oIyuo8uz.png',
              }}
              width={100}
              height={100}
              center
              containerStyle={{ marginTop: 20 }}
            />
            <Text
              marginTop={10}
              fontSize={30}
              fontWeight="medium"
              fontFamily="GothamRoundedBold"
              color="#000000"
              center
              style={{ opacity: 0.8 }}
            >
              {data.data?.user?.profile.name}
            </Text>

            <QuickView
              justifyContent="center"
              alignItems="center"
              marginTop={20}
            >
              <Text
                fontSize={20}
                color="#188ded"
                fontWeight="bold"
                fontFamily="GothamRoundedBold"
              >
                {`$${data.data.lowestWage}`}-{`$${data.data.highestWage}`}
              </Text>
            </QuickView>

            <QuickView row justifyContent="space-between" margin={20}>
              <QuickView row flex={12} alignItems="center">
                <Text color="#a09a9a" fontSize={15}>
                  {datediff}
                </Text>
              </QuickView>
              <QuickView row flex={6} alignItems="center">
                <Text color="#707070" fontSize={15}>
                  32+ Applycants
                </Text>
              </QuickView>
            </QuickView>

            <QuickView row>
              <QuickView flex={2}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#dee1e3',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderRadius: 5,
                  }}
                >
                  <Icon name="favorite" type="fontisto" color="#acb8bf" />
                </TouchableOpacity>
              </QuickView>
              <QuickView flex={10} paddingLeft={10}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#6e5ce6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 15,
                    borderRadius: 5,
                  }}
                >
                  <Text color="#ffffff" fontWeight="medium" fontSize={18}>
                    Apply Now
                  </Text>
                </TouchableOpacity>
              </QuickView>
            </QuickView>
            {/* {data ? <TopTabs /> : <></>} */}
            <TopTabs />
            {/* <InformationScreen /> */}
          </Body>
        </ParallaxScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  detail: parseObjectSelector(applyObjectSelector(jobDetailSelector, state)),
  requireLogin: requireLoginSelector(state),
  loginSelectorData: applyObjectSelector(loginSelector, state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getDetail: (id: number) => dispatch(jobGetDetail({ id })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ApplicantScreens as any));
