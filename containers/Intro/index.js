import React, { Component } from 'react';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * Component
import IntroView from '../../components/IntroView';

class Intro extends Component {
  render() {
    return <IntroView {...this.props} />;
  }
}

export default withAppHOC(Intro);
