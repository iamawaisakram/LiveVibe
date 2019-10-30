import React, { Component } from 'react';
import { connect } from 'react-redux';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * View Component
import SplahsScreenView from '../../components/SplashScreenView';

class SplashScreen extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Intro');
    }, 1500);
  }

  render() {
    return <SplahsScreenView />;
  }
}

const mapDispatchToProps = dispatch => ({});

const connectRedux = connect(
  null,
  mapDispatchToProps
);
export default connectRedux(withAppHOC(SplashScreen));
