/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

// * store
import store from './Store';

// * Navigation
import RootStack from './Navigation';

// ! Disabled Yellow Warnings
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
