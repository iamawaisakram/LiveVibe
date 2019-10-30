import React, { Component } from 'react';
import { View } from 'react-native';

// * Status Bar
import MyStatusBar from '../components/StatusBar';

export default (WrappedComponent, props) => {
  return class withAppHOC extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor="#272735" barStyle="light-content" />
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  };
};
