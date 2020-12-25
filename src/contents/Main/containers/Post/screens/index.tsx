import { Avatar, Body, Container, Header, QuickView, Text } from '@components';
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
        backgroundColor: '#fff',
        height: 450,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 24,
        marginTop: 10,
       }}
    >
      <QuickView>
        <QuickView width={70} height={5} backgroundColor="#615f5e" center borderRadius={5} marginTop={20}></QuickView>
        <QuickView row alignItems="center" paddingHorizontal={20} paddingVertical={10}>
          <Icon type="entypo" name="list" size={30}/>
          <Text color="#615f5e" marginLeft={10} >Add Categories</Text>
        </QuickView>
        <QuickView row alignItems="center" paddingHorizontal={20} paddingVertical={10}>
          <Icon type="entypo" name="image" size={30} color="#615f5e"/>
          <Text color="#615f5e" marginLeft={10} fontWeight="heavy">Add an Image</Text>
        </QuickView>
        <QuickView row alignItems="center" paddingHorizontal={20} paddingVertical={10}>
          <Icon type="ionicon" name="document" size={30} color="#615f5e"/>
          <Text color="#615f5e" marginLeft={10} fontWeight="heavy">Add a document</Text>
        </QuickView>
      </QuickView>
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

  renderRightComponent = () => (
    <QuickView>
      <Text  color="#a6a2a1" fontSize={18}>
        Post
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
          rightComponent={this.renderRightComponent()}
        />
        <Divider />
        <Body>
          <QuickView row marginTop={10}>
            <Avatar source={{uri: 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png'}} size="medium"/>
            <Text color="#000" bold marginLeft={10}>Nguyen Lam</Text>
          </QuickView>
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
        </Body>
        <BottomSheet
            ref={sheetRef}
            snapPoints={[500, 250, 100]}
            renderContent={this.renderContent}
            initialSnap={1} 
          />
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
