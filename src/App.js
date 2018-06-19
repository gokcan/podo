// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import configureStore from './store/configureStore';
import HomeContainer from './containers/Home';
import FormPreview from './components/FormPreviewPage';

const store = configureStore({});

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
  },
  FormPreview: {
    screen: FormPreview
  }
});

const App = () => (
	<Provider store={store}>
		<AppStackNavigator/>
	</Provider>
);

export default App;

