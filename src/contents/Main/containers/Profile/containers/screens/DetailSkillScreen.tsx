import {
  Body,
  Button,
  Container,
  FlatList,
  Header,
  Image,
  QuickView,
  Text,
} from '@components';
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CircleSlider from 'react-native-circle-slider';
import FastImage from 'react-native-fast-image';
import { applyArraySelector, parseArraySelector } from '@utils/selector';
import { profileGetListSkill } from '../../redux/slice';
import { skillSelector } from '../../redux/selector';

interface Props {
  getListSkill: any;
  listSkill: any;
}
interface State {
  isVisible: boolean;
  value: number;
  indexActive: number;
}
// const data = [
//   {
//     url: 'https://drive.google.com/uc?id=16z4RKVJqta6fqhC3vPfWAIpGaHiDpvMF',
//     name: 'ios',
//     exp: 0,
//     key: 0,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1N33Fg6o2yMy-O5cDGWxrT6Tg406RN2wx',
//     name: 'Android',
//     exp: 0,
//     key: 1,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=17gw0ctHIe4Z8NquQ6znubMhrE1vCOYVk',
//     name: 'Backend',
//     exp: 0,
//     key: 2,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1n_atZiqYVyEhIVKVQjj5c-Ps3gGxk6yb',
//     name: 'Java',
//     exp: 0,
//     key: 3,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=15gkTZf6BISKDivxGG7g6mpNYVAbLHZqF',
//     name: 'C/C++',
//     exp: 0,
//     key: 4,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1W8PXg_XB_ZGHW8Vnt19M3kGav0zzePqx',
//     name: 'ASP.NET',
//     exp: 0,
//     key: 5,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1rPGZdYCaBvnFEDdmycAcopJYK1KnWk_Q',
//     name: 'NodeJS',
//     exp: 0,
//     key: 6,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1Ou_ueIICjmgh0uQAr2KZke-RC74MtbBj',
//     name: 'PHP',
//     exp: 0,
//     key: 7,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1SyXc94eexaCPkoLbLfm0w_IoDZfCD9Z6',
//     name: 'Python',
//     exp: 0,
//     key: 8,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1_KCz04dG8TyeTcSg6QEnXLkyjq52XKGl',
//     name: 'Ruby',
//     exp: 3,
//     key: 9,
//   },
//   {
//     url: 'https://drive.google.com/uc?id=1pgttLmAF2FOkd3wCf9DCNsWqVmkOCpGr',
//     name: 'Javascript',
//     exp: 2,
//     key: 10,
//   },
// ];
const data: any = [];
class DetailSkillScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: false,
      value: 0,
      indexActive: 0,
    };
  }

  componentDidMount() {
    const { getListSkill, listSkill } = this.props;
    getListSkill();
    listSkill.metadata?.map((skill: any, index: any) => {
      data.push({ ...skill, exp: 0, index });
    });
  }

  renderSkill = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 30, marginVertical: 30 }}
      onPress={() => {
        this.setState({ value: item.exp });
        this.setState({ isVisible: true });
        this.setState({ indexActive: item.index });
      }}
    >
      <FastImage
        source={{ uri: item.icon }}
        style={{ width: 60, height: 60 }}
      />
      <Text center marginTop={5} numberOfLines={2} style={{ width: 80 }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const { isVisible, value } = this.state;
    const toggleOverlay = () => {
      this.setState({ isVisible: !isVisible });
    };
    const { indexActive } = this.state;
    return (
      <Container>
        <Header backgroundColor="#1f4780" />
        <Body>
          <ScrollView>
            <QuickView>
              <FlatList
                data={data}
                renderItem={this.renderSkill}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              />

              <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
                <QuickView width={300} height={450} backgroundColor="#fff">
                  <QuickView
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <QuickView position="absolute">
                      <Text color="#000">{value}</Text>
                    </QuickView>
                    {data.length > 0 ? (
                      <CircleSlider
                        value={data[indexActive]?.exp}
                        btnRadius={10}
                        dialRadius={60}
                        onValueChange={(x) => {
                          if (x % 24 === 0) {
                            this.setState({ value: x / 24 });
                            data[indexActive].exp = x;
                          }
                          return x;
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    <QuickView>
                      <Button title="Complete" center />
                    </QuickView>
                  </QuickView>
                </QuickView>
              </Overlay>
            </QuickView>
          </ScrollView>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  listSkill: state.profile.toJS().LIST_SKILL,
});

const mapDispatchToProps = (dispatch: any) => ({
  getListSkill: () => dispatch(profileGetListSkill({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailSkillScreen as any);
