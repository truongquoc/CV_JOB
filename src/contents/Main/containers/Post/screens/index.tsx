import { Body, Container, Header } from '@components';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  RichTextEditor,
  RichTextToolbar,
} from 'react-native-zss-rich-text-editor';

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

  render() {
    return (
      <Container>
        <Header />
        <Body>
          <RichTextEditor
            // ref={(r) => (this.richtext = r)}
            initialTitleHTML={'Title!!'}
            initialContentHTML={
              'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
            }
            // editorInitializedCallback={() => this.onEditorInitialized()}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen as any);
