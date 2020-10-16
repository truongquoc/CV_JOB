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
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Dimensions } from 'react-native';
import NavigationService from '@utils/navigation';

const jobType = [
  { id: 1, name: 'Full time' },
  { id: 2, name: 'Fresher' },
  { id: 3, name: 'Work at home' },
  { id: 4, name: 'Freelancer' },
  { id: 5, name: 'Part time' },
  { id: 6, name: 'Contact' },
];
interface Props {
  theme?: any;
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

  renderJobsType = ({ item }: { item: any }) => {
    const { jobStatus } = this.state;
    if (!jobStatus[item.id]) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState((state) => {
              state.jobStatus[item.id] = !state.jobStatus[item.id];
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

  // onItemPress = (index: number) => {
  //   console.log('index', index);
  // };

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
    // const {jobStatus} = this.state;
    const {
      MultiSliderSecondvalue,
      MultiSliderFristvalue,
      multiValue,
    } = this.state;
    return (
      <ScrollView>
        <Container>
          <Header
            height={150}
            backgroundColor="#dcdee0"
            leftComponent={this.renderLeftComponent()}
            centerComponent={this.renderCenterComponent()}
          />
          <Body>
            <QuickView>
              <Text fontSize={20} fontWeight="bold" color="#545050">
                Job Type
              </Text>

              <FlatList
                data={jobType}
                renderItem={this.renderJobsType}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              />
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
          </Body>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterScreen as any);
