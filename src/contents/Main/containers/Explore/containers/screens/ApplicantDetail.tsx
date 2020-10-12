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
import { Icon, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import SaveIcon from '../Shared/SaveIcon';
import TopTabs from './TopTabs';

class ApplicantScreens extends PureComponent {
  render() {
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
              Atlassian
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
                $300-$700
              </Text>
            </QuickView>

            <QuickView row justifyContent="space-between" margin={20}>
              <QuickView row flex={12} alignItems="center">
                <Text color="#a09a9a" fontSize={15}>
                  4 days ago
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
            <TopTabs />
          </Body>
        </ParallaxScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantScreens);
