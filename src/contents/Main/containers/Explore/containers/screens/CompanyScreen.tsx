/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container, QuickView, Text } from '@components';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import { jobDetailSelector } from '../../redux/selector';
import { Divider, Icon } from 'react-native-elements';
import HTML from 'react-native-render-html';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NavigationService from '@utils/navigation';
import exploreStack from '../../routes';

interface Props {
  detail: any;
}
const html =
  '<ul>Hãy đến với chúng tôi nếu bạn đủ đam mê, thích khám phá và luôn sẵn sàng lắng nghe, tiếp thu nhận xét để hoàn thiện bản thân. Dám nghĩ dám làm, muốn phát triển trong môi trường năng động, có thể làm nhiều việc một lúc và có khả năng tổ chức, sắp xếp công việc. Khao khát thực thi những sứ mệnh tốt đẹp, có giá trị với bản thân và có ích với xã hội</ul>';
class CompanyScreen extends PureComponent<Props, any> {
  render() {
    const {
      detail: { data, loading },
    } = this.props;
    return (
      <Container>
        <QuickView>
          <Text color="#4f4d4d" marginTop={20} fontSize={18} bold>
            {data.user.profile.name} Company
          </Text>
          <QuickView row alignItems="center">
            <TouchableWithoutFeedback
              onPress={() => {
                NavigationService.navigate(exploreStack.companyDetailScreen);
              }}
            >
              <Text color="#6e5ce6" fontSize={14}>
                View Detail
              </Text>
            </TouchableWithoutFeedback>
            <Icon
              type="evilicon"
              name="arrow-right"
              size={16}
              color="#6e5ce6"
              style={{ marginLeft: 10 }}
            />
          </QuickView>
          <QuickView row marginTop={20} alignItems="center">
            <Icon type="evilicon" name="location" size={20} color="#6e5ce6" />
            <Text numberOfLines={2} marginLeft={10} color="#4f4d4d">
              {data.address.description}
            </Text>
          </QuickView>
          <QuickView row marginTop={20} alignItems="center">
            <Icon type="foundation" name="web" size={20} color="#6e5ce6" />
            <Text numberOfLines={2} marginLeft={10} color="#4f4d4d">
              Website
            </Text>
            <Text marginLeft={5}>http://novaon.vn</Text>
          </QuickView>
          <Divider style={{ marginTop: 50, height: 1 }} />
          <QuickView marginTop={10}>
            <Text fontSize={20} color="#4f4d4d">
              Introduce Company
            </Text>
            <QuickView marginTop={20}>
              <HTML html={html} />
            </QuickView>
          </QuickView>
        </QuickView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  detail: parseObjectSelector(applyObjectSelector(jobDetailSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CompanyScreen);
