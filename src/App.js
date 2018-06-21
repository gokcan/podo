// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import configureStore from './store/configureStore';
import HomeContainer from './containers/home/Home';
import FormPreviewScreen from './components/form-preview/FormPreviewScreen';

const store = configureStore({});

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
  },
  FormPreview: {
    screen: FormPreviewScreen,
  },
});

const App = () => (
  <Provider store={store}>
    <AppStackNavigator />
  </Provider>
);

export default App;
