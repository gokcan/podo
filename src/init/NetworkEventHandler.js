/* @flow */
import React, { PureComponent } from 'react';
import { NetInfo } from 'react-native';

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
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Connection status: ${isConnected}`);
    }
  };

  render() {
    const { children } = this.props;
    return children;
  }
}
