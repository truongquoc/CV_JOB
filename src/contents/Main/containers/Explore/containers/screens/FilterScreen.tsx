/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container, QuickView, Text, Header, FlatList } from '@components';
import { Icon } from 'react-native-elements';

const jobType = [
  'Full time',
  'Fresher',
  'Work at home',
  'Freelancer',
  'Part time',
  'Contact',
];
class FilterScreen extends PureComponent {
  renderJobsType = ({ item }: { item: any }) => (
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

  renderCenterComponent = () => (
    <QuickView>
      <Text fontWeight="bold" color="#000" fontSize={18}>
        Filter
      </Text>
    </QuickView>
  );

  render() {
    return (
      <Container>
        <Header
          height={150}
          backgroundColor="#dcdee0"
          leftComponent={<Icon type="antdesign" name="close" />}
          centerComponent={this.renderCenterComponent()}
        />
        <QuickView>
          <FlatList
            data={jobType}
            renderItem={this.renderJobsType}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          />
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterScreen as any);
