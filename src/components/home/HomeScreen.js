/* @flow */
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './styles';
import ListItemSeparator from './ListItemSeparator';
import StickyHeader from './StickyHeader';
import ErrorMessage from '../common/ErrorMessage';
import FormListItem from './FormListItem';

type Props = {
  error: boolean,
  isLoading: boolean,
  templateInfo: Array,
  fetchData: Function,
  page: number,
};

export default class HomeScreen extends Component<Props> {
  static navigationOptions = { title: 'Home', header: null };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount() {
    const { fetchData } = this.props;
    StatusBar.setHidden(true);
    fetchData(0);
  }

  onSelect = (item) => {
    const { navigation } = this.props;
    navigation.navigate('FormPreview', {
      title: item.title,
      id: item.id,
    });
  };

  tryFetch = (page, isLoading, fetchData) => {
    if (!isLoading) {
      fetchData(page);
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
          ItemSeparatorComponent={ListItemSeparator}
          ListHeaderComponent={StickyHeader(title)}
          stickyHeaderIndices={[0]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}${item.title}`}
          renderItem={({ item, index }) => (
            <FormListItem
              index={index}
              item={item}
              onSelect={this.onSelect}
              {...item}
            />
          )}
          onEndReachedThreshold={0.9}
          onEndReached={() => this.tryFetch(page + 1, isLoading, fetchData)}
        />
        {isLoading ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator color="#f2f2f2" />
          </View>
        ) : null}
      </View>
    );
  }
}
