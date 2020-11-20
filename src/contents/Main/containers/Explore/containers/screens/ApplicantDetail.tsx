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
import {
  Icon, Divider, withTheme, Overlay,
} from 'react-native-elements';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getIdFromParams, Global } from '@utils/appHelper';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { requireLoginSelector } from '@contents/Config/redux/selector';
import NavigationService from '@utils/navigation';
import rootStack from '@contents/routes';
import TopTabs from './TopTabs';
import { jobApplies, jobGetDetail } from '../../redux/slice';
import { jobDetailSelector } from '../../redux/selector';
import { appliesJob } from '../../redux/api';

interface Props {
  getDetail: (id: string) => any;
  detail: any;
  loginSelectorData?: any;
  appliesJob: (id: string) => any;
}

interface State {
  isVisible: boolean;
  errMsg: String;
}
class ApplicantScreens extends PureComponent<Props, State> {
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

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: false,
      errMsg: '',
    };
  }

  componentDidMount() {
    const { getDetail } = this.props;
    getDetail(getIdFromParams(this.props));
  }

  render() {
    const { loginSelectorData } = this.props;
    const { isVisible, errMsg } = this.state;
    const { token } = Global;

    let datediff;
    const {
      detail: { data },
    } = this.props;
    if (
      this.DateDiff.inMinutes(
        new Date(data.data?.createdat).getTime(),
        new Date().getTime(),
      ) < 60
    ) {
      datediff = `${this.DateDiff.inMinutes(
        new Date(data.data?.createdat).getTime(),
        new Date().getTime(),
      )} minutes ago`;
    } else if (
      this.DateDiff.inHours(
        new Date(data.data?.createdat).getTime(),
        new Date().getTime(),
      ) < 24
    ) {
      datediff = `${this.DateDiff.inHours(
        new Date(data.data?.createdat).getTime(),
        new Date().getTime(),
      )} hours ago`;
    } else {
      datediff = `${this.DateDiff.inDays(
        new Date(data.data?.createdat).getTime(),
        new Date().getTime(),
      )} days ago`;
    }

    const toggleOverlay = () => {
      this.setState({ isVisible: !isVisible });
    };

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
          {data.loading ? (
            <QuickView>
              <ActivityIndicator />
            </QuickView>
          ) : (
            <Body>
              <Image
                source={{
                  uri: data.data?.user.profile.profileUrl,
                }}
                width={100}
                height={100}
                center
                resizeMode="contain"
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
                {data.data?.user?.profile?.name}
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
                  {`$${data.data?.lowestWage}`}
                  -
                  {`$${data.data?.highestWage}`}
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
                    onPress={async () => {
                      if (!token) {
                        NavigationService.navigate(rootStack.authStack);
                      } else {
                        // appliesJob(data.data?.id);
                        try {
                          const result = await appliesJob(data.data?.id);
                        } catch (error) {
                          this.setState({ isVisible: true });
                          this.setState({ errMsg: error.message });
                        }
                      }
                    }}
                  >
                    <Text color="#ffffff" fontWeight="medium" fontSize={18}>
                      Apply Now
                    </Text>
                    <Overlay
                      isVisible={isVisible}
                      onBackdropPress={toggleOverlay}
                      overlayStyle={{ borderRadius: 10 }}
                    >
                      <QuickView
                        width={300}
                        height={150}
                        backgroundColor="#fff"
                        // center
                      >
                        <QuickView flex={1} center>
                          <Text color="#e32d14" fontSize={22} fontWeight="bold">
                            Warning
                          </Text>
                        </QuickView>
                        <QuickView center flex={1}>
                          <Text color="#8a8786" style={{ opacity: 0.7 }}>
                            {errMsg}
                          </Text>
                        </QuickView>
                        <QuickView flex={2}>
                          <Button
                            title="Dismiss"
                            center
                            sharp
                            color="#e32d14"
                          />
                        </QuickView>
                      </QuickView>
                    </Overlay>
                  </TouchableOpacity>
                </QuickView>
              </QuickView>
              <TopTabs />
            </Body>
          )}
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
  getDetail: (id: string) => dispatch(jobGetDetail({ id })),
  // appliesJob: (id: string) => dispatch(jobApplies({ id })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ApplicantScreens as any));
