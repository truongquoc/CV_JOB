/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Container, QuickView, Text, FlatList,
} from '@components';
import { Avatar, Divider } from 'react-native-elements';
import HTML from 'react-native-render-html';

interface JobDetail {
  name: string;
  company: string;
  tag: Array<string>;
  description: string;
  location: string;
  logo: string;
  salary: string;
}

const detailItem: JobDetail = {
  name: 'Full Stack Ruby on Rails Developer',
  company: 'Rockstar Game Inc',
  salary: '$500 - $700',
  logo:
    'https://theengineeringissue.com/wp-content/uploads/2018/11/rockstar.jpg',
  description:
    "<p><strong>Perfect for fans of </strong><i><strong>The Wonderful Things You Will Be</strong></i><strong> and </strong><i><strong>That's Me Loving You</strong></i><strong>, this picture book by a renowned astrophysicist is a lyrical meditation on the preciousness of one child and the vastness of the universe.</strong></p><p>&nbsp;</p><p><i>Just like the sun gives shine to the moon,</i></p><p><i>you light up the world beyond this room . . .</i></p><p><i>You are grand and marvelous, strong and mysterious.</i></p><p><i>The history of the world is in your fingertips.</i></p><p>&nbsp;</p><p>A lyrical meditation on the preciousness of one child and the vastness of the universe, this gorgeously illustrated picture book shares the immensity of a parent's love along with the message that we are all connected to the broader cosmos in important and intimate ways. A perfect bedtime read-aloud,&nbsp;</p><p><i>Child of the Universe</i></p><p>&nbsp;is a book to cherish forever.</p><p>&nbsp;</p><p>The author is an astrophysicist who has been fascinated by the universe since he was a child. As a parent, he has developed a new appreciation for the deep connections between billions of years of cosmic evolution and this one tiny human.</p>",
  location: '417 Wallet Street New York USA',
  tag: [
    'Management',
    'Development',
    'Process',
    'Fullstack',
    'Agile',
    'Ruby on Rails',
    'Back end',
  ],
};

export class InformationScreen extends PureComponent {
  renderListTags = ({ item }: { item: any }) => (
    <QuickView
      backgroundColor="#E3F8F9"
      marginLeft={10}
      marginTop={10}
      borderRadius={5}
      paddingHorizontal={10}
      paddingVertical={2}
    >
      <Text
        color="#04B9D0"
        fontWeight="bold"
        fontSize={14}
        fontFamily="GothamRoundedBold"
      >
        {item}
      </Text>
    </QuickView>
  );

  render() {
    // const contentWidth = useWindowDimensions().width;

    return (
      <Container>
        <QuickView>
          <QuickView marginTop={10}>
            <QuickView marginTop={30}>
              <QuickView row>
                <QuickView backgroundColor="#B5BABD" borderRadius={5}>
                  <Text
                    color="#fff"
                    fontSize={12}
                    fontWeight="bold"
                    style={{
                      paddingHorizontal: 10,
                    }}
                  >
                    Full Time
                  </Text>
                </QuickView>
              </QuickView>
              <QuickView alignItems="center" paddingRight={30}>
                <Text
                  fontSize={28}
                  color="#1D1D1D"
                  fontWeight="bold"
                  fontFamily="GothamRoundedBold"
                >
                  {detailItem.name}
                </Text>
              </QuickView>
              <QuickView row>
                <Text
                  color="#B5BABD"
                  fontFamily="GothamRoundedBold"
                  style={{ opacity: 0.5 }}
                >
                  Posted on
                </Text>
                <Text color="#B5BABD" marginLeft={5}>
                  Octorbor 24, 2016
                </Text>
              </QuickView>
            </QuickView>
            <Divider
              style={{ backgroundColor: '#d9d9d9', height: 2, marginTop: 20 }}
            />
            <QuickView row alignItems="center" marginTop={10}>
              <QuickView>
                <Avatar source={{ uri: detailItem.logo }} rounded />
              </QuickView>
              <QuickView marginLeft={10}>
                <Text
                  color="1D1D1D"
                  fontWeight="bold"
                  fontFamily="GothamRoundedBold"
                >
                  COMPANY
                </Text>
                <Text color="#B5BABD" fontSize={16}>
                  {detailItem.company}
                </Text>
              </QuickView>
              <QuickView marginLeft={10}>
                <Text
                  color="1D1D1D"
                  fontWeight="bold"
                  fontFamily="GothamRoundedBold"
                >
                  LOCATION
                </Text>
                <Text color="#B5BABD" fontSize={16} numberOfLines={2}>
                  {detailItem.location}
                </Text>
              </QuickView>
            </QuickView>

            <QuickView>
              <FlatList
                data={detailItem.tag}
                renderItem={this.renderListTags}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              />
            </QuickView>
            <HTML html={detailItem.description} />
          </QuickView>
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen);
