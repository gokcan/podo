/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ListItemSeperator from './ListItemSeperator';
import StickyHeader from './StickyHeader';
import ErrorMessage from '../common/ErrorMessage';

type Props = {
  error: boolean,
  isLoading: boolean,
  templateInfo: Array,
  fetchData: Function,
  page: number,
};

export default class HomeScreen extends Component<Props> {
  static navigationOptions = { title: 'Home', header: null };

  componentWillMount() {
    const { fetchData } = this.props;
    StatusBar.setHidden(true);
    fetchData(0);
  }

  onPress = (item) => {
    this.props.navigation.navigate('FormPreview', {
      title: item.title,
      id: item.id,
    });
  };

  getRowItem = (item) => {
    const uri = `https:${item.screenshot}`;
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => this.onPress(item)}>
        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
          <Image style={{ width: 140, height: 164 }} source={{ uri }} />
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 4 }}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.templateInfoText}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  tryFetch = (page, isLoading, fetchData) => {
    if (!isLoading) {
      // TODO(gokcan): Also check page limit.
      fetchData(page + 1);
    }
  };

  render() {
    const {
      isLoading, error, fetchData, templateInfo, page,
    } = this.props;
    const title = 'Jotform Form Templates';
    return (
      <View style={styles.container}>
        {error ? ErrorMessage : null}
        <FlatList
          data={templateInfo}
          ItemSeparatorComponent={ListItemSeperator}
          ListHeaderComponent={StickyHeader(title)}
          stickyHeaderIndices={[0]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.getRowItem(item)}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.tryFetch(page, isLoading, fetchData)}
        />
        {isLoading ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator color="#f7f7f7" />
          </View>
        ) : null}
      </View>
    );
  }
}
