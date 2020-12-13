import { Body, Container, Header, QuickView, Text } from '@components';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  RichEditor,
  RichToolbar,
  DefaultActions,
} from 'react-native-pell-rich-editor';
import { Divider, Icon } from 'react-native-elements';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import NavigationService from '@utils/navigation';
const sheetRef: any = React.createRef();

class PostScreen extends PureComponent {
  //   onEditorInitialized() {
  //     this.setFocusHandlers();
  //     this.getHTML();
  //   }

  //   setFocusHandlers() {
  //     this.richtext.setTitleFocusHandler(() => {
  //       //alert('title focus');
  //     });
  //     this.richtext.setContentFocusHandler(() => {
  //       //alert('content focus');
  //     });
  //   }
  renderContent = () => (
    <QuickView
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </QuickView>
  );

  richText: any = React.createRef();
  handleHeightChange(height?: any) {
    console.log('editor height change:', height);
  }
  renderLeftComponent = () => {
    return (
      <Icon
        name="cross"
        type="entypo"
        color="#8a8883"
        onPress={() => {
          NavigationService.goBack();
        }}
      />
    );
  };

  createContentStyle() {
    // Can be selected for more situations (cssText or contentCSSText).
    const contentStyle = {
      color: '#000',
      placeholderColor: 'gray',
      // cssText: '#editor {background-color: #f3f3f3}', // initial valid
      contentCSSText: 'font-size: 20px; min-height: 200px; height: 100%;', // initial valid
    };
    return contentStyle;
  }
  renderCenterComponent = () => (
    <QuickView>
      <Text bold color="#000" fontSize={20}>
        Start a Post
      </Text>
    </QuickView>
  );

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <Header
          backgroundColor="#FFF"
          leftComponent={this.renderLeftComponent()}
          centerComponent={this.renderCenterComponent()}
        />
        <Divider />
        <Body>
          <ScrollView style={[styles.scroll]} keyboardDismissMode={'none'}>
            <RichEditor
              // initialFocus={true}
              disabled={false}
              editorStyle={this.createContentStyle()}
              ref={this.richText}
              style={[styles.rich]}
              placeholder={'What do you want to talk about?'}
              // initialContentHTML={initHTML}
              // editorInitializedCallback={this.editorInitializedCallback}
              // onChange={that.handleChange}
              onHeightChange={() => {}}
            />
          </ScrollView>

          <BottomSheet
            ref={sheetRef}
            snapPoints={[500, 250, 100]}
            renderContent={this.renderContent}
            initialSnap={1}
          />
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  richBar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e8e8e8',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
  },

  tib: {
    textAlign: 'center',
    color: '#515156',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen as any);
