// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { View, ActivityIndicator } from 'react-native';
import throttle from 'lodash/throttle';
import configureStore from './store/configureStore';
import HomeContainer from './containers/home/Home';
import FormPreviewScreen from './components/form-preview/FormPreviewScreen';
import NetworkEventHandler from './init/NetworkEventHandler';
import { saveState, loadState } from './utils/storage';

const store = configureStore({});

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
  },
  FormPreview: {
    screen: FormPreviewScreen,
  },
});

class App extends Component<> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store,
    };
  }

  /**
   * Loads previously saved state tree to configure the store.
   * If something unexpected occurs while loading it, continue with
   * the default store configuration (with predefined initial state object).
   * In next version,
   * we may move this logic to pre-start(splash) phase of the application.
   */
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const preloaded = await loadState();
      const preloadedStore = configureStore(preloaded);

      // Save the last available state every 1 second.
      preloadedStore.subscribe(throttle(() => {
        saveState(preloadedStore.getState());
      }, 1000));

      this.setState({ store: preloadedStore }, () => this.setState({ isLoading: false }));
    } catch (error) {
      this.setState({ store }, () => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator color="#f2f2f2" />
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <NetworkEventHandler>
          <AppStackNavigator />
        </NetworkEventHandler>
      </Provider>);
  }
}

export default App;
