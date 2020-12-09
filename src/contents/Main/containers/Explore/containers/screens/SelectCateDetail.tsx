import {
  Body,
  Button,
  Container,
  FlatList,
  Header,
  QuickView,
  Text,
} from '@components';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-elements';
import { TQuery } from '@utils/redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { jobGetListCate } from '../../redux/slice';

interface Props {
  theme?: any;
  getListCate: any;
  listCate: any;
}

interface State {
  onActive: number;
}

class SelectCateDetail extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      onActive: 0,
    };
  }

  componentDidMount() {
    const { getListCate } = this.props;
    getListCate();
  }

  renderListCate = ({ item }: { item: any }) => {
    const { onActive } = this.state;
    if (item.id === onActive) {
      return (
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            marginVertical: 5,
            marginTop: 5,
            borderRadius: 5,
            paddingVertical: 8,
            backgroundColor: 'rgba(3, 54, 255, 0.25)',
            paddingHorizontal: 20,
            zIndex: -3,
          }}
          onPress={() => {
            this.setState({ onActive: item.id });
          }}
        >
          <Text
            color="#0336FF"
            fontWeight="medium"
            center
            fontSize={18}
            fontFamily="GothamRoundedBold"
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 5,
          marginVertical: 5,
          marginTop: 5,
          borderRadius: 5,
          paddingVertical: 8,
          backgroundColor: 'rgba(83, 134, 197, 0.1)',
          paddingHorizontal: 20,
          zIndex: -3,
        }}
        onPress={() => {
          this.setState({ onActive: item.id });
        }}
      >
        <Text
          color="#0336FF"
          fontWeight="medium"
          center
          fontSize={18}
          fontFamily="GothamRoundedBold"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  renderCenterHeaderComponent = () => (
    <QuickView>
      <Text color="#FFFFFF" fontSize={24} fontWeight="bold">
        Pick topics of your interest
      </Text>
    </QuickView>
  );

  renderRightHeaderComponent = () => (
    <QuickView>
      <Text color="#ffffff" fontSize={18}>
        Skip
      </Text>
    </QuickView>
  );

  // selectOneCate = () => {

  // }
  render() {
    const {
      listCate: { metadata },
    } = this.props;

    return (
      <Container>
        <Header
          backgroundColor="#5856d6"
          height={150}
          centerComponent={this.renderCenterHeaderComponent()}
          rightComponent={this.renderRightHeaderComponent()}
        />
        <Body>
          <ScrollView>
            <FlatList
              style={{ marginTop: 20 }}
              data={metadata}
              renderItem={this.renderListCate}
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            />
          </ScrollView>
          <Button
            title="Done"
            borderRadius={5}
            marginTop={-5}
            paddingVertical={15}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  listCate: state.job.toJS().LIST_CATE,
});

const mapDispatchToProps = (dispatch: any) => ({
  getListCate: (query?: TQuery) => dispatch(jobGetListCate({ query })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(SelectCateDetail as any));
