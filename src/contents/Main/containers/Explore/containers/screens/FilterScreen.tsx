/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  QuickView,
  Text,
  Header,
  FlatList,
  ButtonGroup,
  Picker,
  Button,
  Body,
  ListCheckBox,
} from '@components';
import { Icon, Slider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import * as _ from 'lodash';
import { Dimensions } from 'react-native';
import NavigationService from '@utils/navigation';
import { stringifyQuery, TQuery } from '@utils/redux';
import { fetchAllJobs } from '../../redux/api';
import { jobGetList, setFilter } from '../../redux/slice';
import exploreStack from '../../routes';

const jobType = [
  { id: 0, name: 'Full Time', type: 'FULLTIME' },
  { id: 1, name: 'Fresher' },
  { id: 2, name: 'Work at home' },
  { id: 3, name: 'Freelancer' },
  { id: 4, name: 'Part time', type: 'PARTTIME' },
  { id: 5, name: 'Contact' },
];
interface Props {
  theme?: any;
  setFilterRedux?: any;
  getList: any;
  filterObject: any;
}
interface State {
  jobStatus: Array<any>;
  MultiSliderFristvalue: number;
  multiValue: Array<string>;
  MultiSliderSecondvalue: number;
}
const screenWidth = Math.round(Dimensions.get('window').width);
const options = [
  { name: 'Swedish', value: 'sv' },
  { name: 'English', value: 'en' },
];

const companyList = [
  {
    id: 1,
    name: 'IT software',
  },
  {
    id: 2,
    name: 'Call centre',
  },
  {
    id: 3,
    name: 'The Banking',
  },
  {
    id: 4,
    name: 'Datahouse Asia',
  },
  {
    id: 5,
    name: 'Real Estate',
  },
  {
    id: 6,
    name: 'Entertainment',
  },
];
const data = [
  { id: '1', name: '100$' },
  { id: '2', name: '300$' },
  { id: '3', name: '600$' },
  { id: '4', name: '1000$' },
];
class FilterScreen extends PureComponent<Props, State> {
  private pickerRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      jobStatus: new Array(jobType.length).fill(false),
      MultiSliderFristvalue: 3,
      MultiSliderSecondvalue: 7,
      multiValue: [],
    };
  }

  applyFilter = async () => {
    const { jobStatus } = this.state;
    const { setFilterRedux, getList, filterObject } = this.props;
    const querySelected: Array<any> = [];
    const index = _.findIndex(jobStatus, (status) => {
      return status === true;
    });
    const s = { type: jobType[index].type };
    setFilterRedux({ s });

    getList({ s });
    NavigationService.goBack();
  };

  renderJobsType = ({ item }: { item: any }) => {
    const { jobStatus } = this.state;
    if (!jobStatus[item.id]) {
      return (
        <TouchableOpacity
          onPress={() => {
            jobStatus.forEach((_data, index) => {
              if (item.id === index) {
                this.setState((state) => {
                  state.jobStatus[item.id] = !state.jobStatus[item.id];
                });
              } else {
                this.setState((state) => {
                  state.jobStatus[index] = false;
                });
              }
            });

            // this.state.jobStatus[item.id] = !this.state.jobStatus[item.id];
            this.forceUpdate();
          }}
          style={{
            marginHorizontal: 5,
            marginVertical: 5,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          <LinearGradient
            colors={['#ffffff', '#ffffff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingHorizontal: 20,
              borderRadius: 7,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: '#eaecef',
            }}
          >
            <Text
              color="#7b7b7b"
              fontWeight="bold"
              fontSize={14}
              fontFamily="GothamRoundedBold"
            >
              {item.name}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState((state) => {
            state.jobStatus[item.id] = !state.jobStatus[item.id];
          });
          this.forceUpdate();
        }}
        style={{
          marginHorizontal: 5,
          marginVertical: 5,
          marginTop: 5,
          borderRadius: 7,
        }}
      >
        <LinearGradient
          colors={['#554ef5', '#9230f3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            paddingHorizontal: 20,
            borderRadius: 3,
            paddingVertical: 8,
          }}
        >
          <Text
            color="#c0c2c4"
            fontWeight="bold"
            fontSize={14}
            fontFamily="GothamRoundedBold"
          >
            {item.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  renderListCompany = ({ item }: { item: any }) => {
    const { jobStatus } = this.state;
    if (!jobStatus[item.id]) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState((state) => {
              state.jobStatus[item.id] = !state.jobStatus[item.id];
            });
            this.forceUpdate();
          }}
          style={{
            marginHorizontal: 5,
            marginVertical: 5,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          <LinearGradient
            colors={['#fff', '#fff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingHorizontal: 20,
              borderRadius: 3,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: '#d7d9db',
            }}
          >
            <Text
              color="#929496"
              fontWeight="bold"
              fontSize={14}
              fontFamily="GothamRoundedBold"
            >
              {item.name}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState((state) => {
            state.jobStatus[item.id] = !state.jobStatus[item.id];
          });
          this.forceUpdate();
        }}
        style={{
          marginHorizontal: 5,
          marginVertical: 5,
          marginTop: 5,
          borderRadius: 10,
        }}
      >
        <LinearGradient
          colors={['#4124e3', '#8252e3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            paddingHorizontal: 20,
            borderRadius: 3,
            paddingVertical: 8,
          }}
        >
          <Text
            color="#c0c2c4"
            fontWeight="bold"
            fontSize={14}
            fontFamily="GothamRoundedBold"
          >
            {item.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  renderCenterComponent = () => (
    <QuickView>
      <Text fontWeight="bold" color="#000" fontSize={18}>
        Filter
      </Text>
    </QuickView>
  );

  renderLeftComponent = () => (
    <Icon
      type="antdesign"
      name="close"
      onPress={() => {
        NavigationService.goBack();
      }}
    />
  );

  render() {
    const {
      MultiSliderSecondvalue,
      MultiSliderFristvalue,
      multiValue,
    } = this.state;

    return (
      <Container>
        <Header
          height={100}
          backgroundColor="#f5f5f9"
          leftComponent={this.renderLeftComponent()}
          centerComponent={this.renderCenterComponent()}
        />
        <Body>
          <ScrollView>
            <QuickView marginTop={30}>
              <Text fontSize={20} fontWeight="bold" color="#838383">
                Job Type
              </Text>
              <QuickView marginTop={30}>
                <FlatList
                  data={jobType}
                  renderItem={this.renderJobsType}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                />
              </QuickView>
            </QuickView>
            <QuickView marginTop={10}>
              <Text fontSize={20} fontWeight="bold" color="#787a80">
                Select City
              </Text>
              <Picker
                labels={['Java', 'Javascript']}
                values={['java', 'js']}
                width={screenWidth - 20}
                height={40}
                shadow
                placeholder="Select Location"
                // selectedValue={1}
                ref={(ref) => {
                  this.pickerRef = ref;
                }}
                style={{ backgroundColor: '#fff' }}
                onValueChange={(value) => {
                  // console.log('onValueChange: ', value);
                }}
              />
            </QuickView>

            <QuickView marginTop={10}>
              <Text fontSize={20} fontWeight="bold" color="#545050">
                Company
              </Text>
              <Picker
                labels={['Java', 'Javascript']}
                values={['java', 'js']}
                width={screenWidth - 20}
                height={40}
                shadow
                placeholder="Select Location"
                // selectedValue={1}
                ref={(ref) => {
                  this.pickerRef = ref;
                }}
                style={{ backgroundColor: '#fff' }}
                onValueChange={(value) => {
                  // console.log('onValueChange: ', value);
                }}
              />
            </QuickView>

            <QuickView marginTop={10}>
              <Text fontSize={20} fontWeight="bold" color="#545050">
                Distance
              </Text>

              <MultiSlider
                values={[MultiSliderFristvalue, MultiSliderSecondvalue]}
                sliderLength={screenWidth - 30}
                // onValuesChange={multiSliderValuesChange}
                selectedStyle={{ backgroundColor: '#4d2eab', height: 5 }}
                trackStyle={{ height: 5, borderRadius: 5 }}
                min={0}
                max={20}
                step={1}
                // markerContainerStyle={{ backgroundColor: 'red' }}
                markerStyle={{
                  backgroundColor: '#fff',
                  borderColor: '#4d2eab',
                  borderWidth: 2,
                  width: 20,
                  height: 20,
                }}
                touchDimensions={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  slipDisplacement: 200,
                }}
                allowOverlap
                snapped
                // customLabel={CustomLabel}
              />
            </QuickView>

            <QuickView marginTop={10}>
              <Text fontSize={20} fontWeight="bold" color="#545050">
                Distance
              </Text>
              <QuickView>
                <FlatList
                  data={companyList}
                  renderItem={this.renderJobsType}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                />
              </QuickView>
            </QuickView>

            <QuickView marginTop={10}>
              <Text fontSize={20} fontWeight="bold" color="#545050">
                Salary
              </Text>
              <QuickView>
                <ListCheckBox
                  data={data}
                  defaultValue={multiValue}
                  // onChange={(value: any) => console.log('screenMulti', value)}
                />
              </QuickView>
            </QuickView>
          </ScrollView>
          <Button title="Apply" onPress={this.applyFilter} />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  filterObject: state.job.toJS().setFilter,
});

const mapDispatchToProps = (dispatch: any) => ({
  setFilterRedux: (s: any) => dispatch(setFilter({ s })),
  getList: (query?: TQuery) => dispatch(jobGetList({ query })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterScreen as any);
