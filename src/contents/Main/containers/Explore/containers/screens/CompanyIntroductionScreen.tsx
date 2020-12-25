import React, { PureComponent } from 'react';
import { Container, QuickView, Text } from '@components';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import { jobDetailSelector } from '../../redux/selector';

const html =
  '<ul>Hãy đến với chúng tôi nếu bạn đủ đam mê, thích khám phá và luôn sẵn sàng lắng nghe, tiếp thu nhận xét để hoàn thiện bản thân. Dám nghĩ dám làm, muốn phát triển trong môi trường năng động, có thể làm nhiều việc một lúc và có khả năng tổ chức, sắp xếp công việc. Khao khát thực thi những sứ mệnh tốt đẹp, có giá trị với bản thân và có ích với xã hội</ul>';

interface Props {
  detail: any;
}

class CompanyIntroductionScreen extends PureComponent<Props, any> {
  map: any;

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const {
      detail: { data, loading },
    } = this.props;
    return (
      <Container>
        <QuickView marginTop={20} marginLeft={20}>
          <Text color="#000" bold>
            Introduction
          </Text>
        </QuickView>
        <HTML html={html} />
        <QuickView marginTop={20} marginLeft={20}>
          <Text color="#000" bold>
            Lien hhe
          </Text>
        </QuickView>
        <QuickView row marginLeft={10} marginTop={20}>
          <Icon type="evilicon" name="location" />
          <Text color="#4f4d4d">{data.address.description}</Text>
        </QuickView>
        <QuickView center>
          <MapView
            ref={(map) => {
              this.map = map;
            }}
            style={{ flex: 1, width: screenWidth - 30 }}
            initialRegion={{
              latitude: 16.06375,
              longitude: 108.17969,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: 16.06375,
                longitude: 108.17969,
              }}
            ></Marker>
          </MapView>
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  detail: parseObjectSelector(applyObjectSelector(jobDetailSelector, state)),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyIntroductionScreen as any);
