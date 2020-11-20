import { Avatar, QuickView, Text } from '@components';
import { loginSelector } from '@contents/Auth/containers/Index/Login/redux/selector';
import { logout } from '@contents/Auth/containers/Index/Login/redux/slice';
import { themeSelector } from '@contents/Config/redux/selector';
import rootStack from '@contents/routes';
import NavigationService from '@utils/navigation';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import React, { PureComponent } from 'react';
import { withTheme } from 'react-native-elements';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Modal, {
  ModalButton,
  ModalContent,
  ModalFooter,
} from 'react-native-modals';
import { connect } from 'react-redux';

interface Props {
  reduxLogout: () => any;
  loginSelectorData?: any;
}
interface State {
  isVisibleBackdrop: boolean;
}

class SidebarLoginScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isVisibleBackdrop: false,
    };
  }

  modalFooterComponent = () => {
    const { reduxLogout } = this.props;
    return (
      <ModalFooter>
        <ModalButton
          text="Cancel"
          onPress={() => {
            this.setState({ isVisibleBackdrop: false });
          }}
        />
        <ModalButton
          text="Yes"
          onPress={() => {
            reduxLogout();
            this.setState({ isVisibleBackdrop: false });
          }}
        />
      </ModalFooter>
    );
  };

  render() {
    const { loginSelectorData } = this.props;

    const { isVisibleBackdrop } = this.state;
    return (
      <QuickView>
        <QuickView alignItems="center" marginTop={-48}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                loginSelectorData.data.profile?.profileUrl
                || 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            // containerStyle={{
            //   position: 'absolute',
            //   left: '40%',
            //   top: -60,
            //   zIndex: 999,
            // }}
            title="A1"
          />
        </QuickView>
        <QuickView>
          <QuickView
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfcccc',
            }}
            paddingTop={20}
            paddingBottom={50}
          >
            <Text center color="#241f1f">
              {loginSelectorData.data?.profile.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                NavigationService.navigate(rootStack.profileStack, {
                  screen: 'ProfileScreen',
                });
              }}
            >
              <Text center marginTop={5} color="#4771b5">
                Edit Profile
              </Text>
            </TouchableWithoutFeedback>
          </QuickView>
          <QuickView
            paddingHorizontal={20}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfcccc',
            }}
            paddingTop={20}
            paddingBottom={50}
          >
            <TouchableWithoutFeedback>
              <Text color="#241f1f">WHO VIEW MY PROFILE</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                JOB ALERTS
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                NOTIFICATIONS
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                SHARE YOUR PROFILE
              </Text>
            </TouchableWithoutFeedback>
          </QuickView>

          <QuickView
            paddingHorizontal={20}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfcccc',
            }}
            paddingTop={20}
            paddingBottom={50}
          >
            <TouchableWithoutFeedback>
              <Text color="#241f1f">TERMS AND CONDITIONS</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                PRIVACY POLICY
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                CONTACT US
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text color="#241f1f" marginTop={20}>
                FEEDBACK
              </Text>
            </TouchableWithoutFeedback>
          </QuickView>

          <QuickView
            paddingHorizontal={20}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cfcccc',
            }}
            paddingTop={20}
            paddingBottom={50}
          >
            <TouchableWithoutFeedback>
              <Text color="#241f1f">LANGUAGE</Text>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isVisibleBackdrop: true });
              }}
            >
              <Text color="#241f1f" marginTop={20} fontSize={16}>
                LOGOUT
              </Text>
            </TouchableOpacity>
            <Modal
              style={{ paddingBottom: 50 }}
              visible={isVisibleBackdrop}
              width={300}
              footer={this.modalFooterComponent()}
            >
              <ModalContent>
                <QuickView>
                  <Text style={{ textAlign: 'center' }}>
                    Do you want to logout
                  </Text>
                </QuickView>
              </ModalContent>
            </Modal>
          </QuickView>
        </QuickView>
      </QuickView>
    );
  }
}
const mapStateToProps = (state: any) => ({
  themeRedux: themeSelector(state),
  loginSelectorData: parseObjectSelector(
    applyObjectSelector(loginSelector, state),
  ),
});

const mapDispatchToProps = (dispatch: any) => ({
  reduxLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(SidebarLoginScreen as any));
