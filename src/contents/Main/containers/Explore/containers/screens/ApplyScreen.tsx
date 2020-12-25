import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Body, Button, Container, Header, QuickView, Text } from '@components';
import { Icon } from 'react-native-elements';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { jobApplies } from '../../redux/slice';
import { applyObjectSelector, parseObjectSelector } from '@utils/selector';
import { profileSelector } from '@contents/Main/containers/Profile/redux/selector';
import { getIdFromParams, Global } from '@utils/appHelper';
import DocumentPicker from 'react-native-document-picker';
import Config from 'react-native-config';
import axios from 'axios';
import NavigationService from '@utils/navigation';
import { profileGetDetail } from '@contents/Main/containers/Profile/redux/slice';
import { TQuery } from '@utils/redux';

interface Props {
  appliesJob: (id: string) => any;
  id: any;
  profile: any;
  getDetailProfile: any;
}

interface State {}
class ApplyScreen extends PureComponent<Props, State> {
  componentDidMount() {
    const { getDetailProfile } = this.props;
    getDetailProfile();
  }

  render() {
    const {
      appliesJob,
      profile: { data },
    } = this.props;

    return (
      <Container>
        <Header
          backgroundColor="#a5cbf0"
          centerComponent={
            <QuickView width={300}>
              <Text color="#000" center fontSize={18} bold>
                Personal Assistant with advance level in English
              </Text>
            </QuickView>
          }
        />
        <Body backgroundColor="#f0eeeb">
          <ScrollView>
            <Text fontSize={20} center marginTop={20} color="#000">
              Following profile will be sent to the recuilter
            </Text>
            <QuickView
              row
              backgroundColor="#fff"
              paddingHorizontal={20}
              paddingVertical={30}
            >
              <Icon type="evilicon" color="#6ca9e6" name="arrow-up" />
              <Text color="#6ca9e6">UPLOAD RESUME</Text>
            </QuickView>
            <QuickView
              backgroundColor="#fff"
              marginTop={20}
              paddingHorizontal={20}
              paddingVertical={30}
            >
              <Text color="#000" bold fontSize={16}>
                Attached CV
              </Text>
              <Text color="#000">
                {data.profile && data.profile.cvURL ? data.profile.cvURL : ''}
              </Text>
              <Text color="#000" bold>
                Your phone number:
              </Text>
              <Text color="#000">
                {data.profile && data.profile.phone ? data.profile.phone : ''}
              </Text>
            </QuickView>
          </ScrollView>
          <Button
            title="Confirm Apply"
            marginBottom={30}
            // disabled={true}
            onPress={async () => {
              if (data.profile.cvURL) {
                // const result = await appliesJob(getIdFromParams(this.props));
                const token = Global.token;
                const result: any = await axios.post(
                  `http://careernetwork.ml/api/v1/jobs/${getIdFromParams(
                    this.props,
                  )}/applies`,
                  data,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
                );
                NavigationService.goBack();
              } else {
                try {
                  const respnse = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images],
                  });
                  const image: any = {
                    uri: respnse.uri,
                    type: respnse.type,
                    name: respnse.name,
                  };
                  const data = new FormData();
                  data.append('file', image);
                  const result: any = await axios.post(
                    'http://careernetwork.ml/api/v1/upload',
                    data,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data; ',
                      },
                    },
                  );

                  const token = Global.token;
                  await axios.patch(
                    'http://careernetwork.ml/api/v1/auth/me/cv',
                    {
                      cvUrl: result.data.data.url,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    },
                  );
                  NavigationService.goBack();
                } catch (err) {
                  console.log('err', err);

                  if (DocumentPicker.isCancel(err)) {
                    // User cancelled the picker, exit any dialogs or menus and move on
                  } else {
                    throw err;
                  }
                }
              }
            }}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  profile: parseObjectSelector(applyObjectSelector(profileSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  appliesJob: (id: string) => dispatch(jobApplies({ id })),
  getDetailProfile: (query?: TQuery) => dispatch(profileGetDetail({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplyScreen as any);