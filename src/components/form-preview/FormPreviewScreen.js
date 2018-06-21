// @flow
import React, { Component } from 'react';
import { View, Button, Text, StatusBar, WebView } from 'react-native';
import styles from './styles';
import { apiUrl } from '../../config';

export default class FormPreviewScreen extends Component {
  static navigationOptions = { title: 'FormPreview', header: null };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NULL');
    const id = navigation.getParam('id', 'NULL');

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, marginTop: 2 }}>
          <Text
            style={{
              color: '#f7f7f7',
              fontSize: 16,
              padding: 8,
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Futura',
            }}
          >
            {title}
          </Text>
          <WebView
            source={{ uri: `${apiUrl}${id}?preview=true&cardForms` }}
            style={{ marginTop: 16 }}
            startInLoadingState
          />
          <Button title="← Go back" onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    );
  }
}
