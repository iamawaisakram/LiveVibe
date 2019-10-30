import React, { Component } from 'react';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * View Component
import InterestsView from '../../components/InterestsView';

class Interests extends Component {
  render() {
    return <InterestsView {...this.props} />;
  }
}

export default withAppHOC(Interests);
