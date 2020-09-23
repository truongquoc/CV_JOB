/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, ParallaxScrollView, Image,
} from '@components';
import { Icon, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import SaveIcon from '../Shared/SaveIcon';

class ApplicantScreens extends PureComponent {
  render() {
    return (
      <Container>
        <ParallaxScrollView
          renderStickyHeader={() => (
            <Header />
          )}
        >
          <Body>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1118574145724399616/oIyuo8uz.png',
              }}
              width={100}
              height={100}
              center
              containerStyle={{ marginTop: 20 }}
            />
            <Text
              fontSize={30}
              fontWeight="medium"
              color="#000000"
              center
              style={{ opacity: 0.8 }}
            >
              Atlassian
            </Text>
            <QuickView row flex={6} alignItems="center" marginTop={15}>
              <Icon
                type="entypo"
                name="location-pin"
                color="#707070"
              />
              <Text color="#707070" fontSize={15}>
                417 Wallet Street New York USA
              </Text>
            </QuickView>
            <QuickView
              row
              justifyContent="space-between"
              margin={20}
            >
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

            <QuickView
              center
              row
              justifyContent="space-between"
              marginTop={20}
              marginLeft={20}
            >
              <QuickView row flex={8} alignItems="center">
                <Text color="#2d2b2b" fontSize={15}>
                  Experience
                </Text>
              </QuickView>
              <QuickView row flex={8} alignItems="center">
                <Text color="#2d2b2b" fontSize={15}>
                  Employment
                </Text>
              </QuickView>
              <QuickView row flex={6} alignItems="center">
                <Text color="#2d2b2b" fontSize={15}>
                  Salary
                </Text>
              </QuickView>

            </QuickView>

            <QuickView
              center
              row
              justifyContent="space-between"
              marginTop={10}
              marginLeft={20}
            >
              <QuickView row flex={8} alignItems="center">
                <Text color="#2d2b2b" fontSize={15} fontWeight="medium">
                  2-5 years
                </Text>
              </QuickView>
              <QuickView row flex={8} alignItems="center">
                <Text color="#2d2b2b" fontSize={15} fontWeight="medium">
                  Full time
                </Text>
              </QuickView>
              <QuickView row flex={6} alignItems="center">
                <Text color="#2d2b2b" fontSize={15} fontWeight="medium">
                  $5,000
                </Text>
              </QuickView>
            </QuickView>
            {/* <Text center marginTop ={10} fontWeight ={'bold'}>
            -----------------------------------------
          </Text> */}
            <Divider style={{ backgroundColor: 'blue', margin: 30 }} />
            <Text fontSize={20} fontWeight="medium" color="#2d2b2b" marginHorizontal={15}>
              Job Description
            </Text>
            <QuickView
              marginTop={10}
              margin={20}
              line-height={5}
            >
              <Text color="#2d2b2b" fontSize={18}>
                Personnel shall assist with Management activities, to include: Tracking assets through PITC's asset management application; provisioning assets; provide logistical support for the movement of assets; prep IT equipment prior to user deployment; and assist with the disposal coordination and excising of equipment.
              </Text>
              <Text color="#2d2b2b" fontSize={18} marginTop={10}>
                Personnel shall assist with DeskSide activities, to include: installation of IT equipment; assisting with the movement of assets throughout the campus, providing desk-side end user hardware support, and provide end user training, to include formal or informal sessions if needed.
              </Text>
              <Text color="#2d2b2b" fontSize={18} marginTop={10}>
                Place of Performance:
              </Text>
              <Text color="#2d2b2b" fontSize={18}>
                The Executive Office of the President (EOP) complex
              </Text>
              <Text color="#2d2b2b" fontSize={18} marginTop={10}>
                Hours of Operation:
              </Text>
              <Text color="#2d2b2b" fontSize={18}>
                Provide 24/7 coverage, through shift work.
              </Text>
              <Text color="#2d2b2b" fontSize={18} marginTop={10}>
                Personnel will be required to routine lift or transport equipment weighing up to 50lbs.
                {/* {`Personnel will be required to routine lift or transport equipment weighing up to 50lbs.
Personnel will be required to routine lift or transport equipment weighing up to 50lbs.
            `} */}
              </Text>
            </QuickView>
          </Body>
        </ParallaxScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantScreens);
