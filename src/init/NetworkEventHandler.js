/* @flow */
import React, { PureComponent } from 'react';
import { NetInfo, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
  },
});

type Props = {
  children: React.Node,
};

export default class NetworkEventHandler extends PureComponent<Props> {
  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleChange);
  }

  /**
   * Listens to network connection change events and dispatches an action.
   */
  handleChange = (conn) => {
    const isConnected = conn.type !== 'none';
    console.warn(`Connection status: ${isConnected}`);
  };

  render() {
    return <View style={styles.wrapper}>{this.props.children}</View>;
  }
}
