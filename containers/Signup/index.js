import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * Component
import SignupView from '../../components/SignupView';

// * API Function
import {
  signupAPI,
  countriesListAPI,
  interestsListAPI,
  statesListAPI,
  citiesListAPI,
  uploadPictureAPI
} from '../../api/User/Signup';

// * Redux Actions
import {
  setCountries,
  setInterests,
  setStates,
  setCities
} from '../../ducks/user/action';

// * Utility Function
import appendDataIntoForm from '../../utilities';

class Signup extends Component {
  state = {
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phone: '',
    dob: new Date(),
    city_id: '',
    state_id: '',
    country_id: '',
    device_type: Platform.OS === 'android' ? 'android' : 'ios',
    user_interests: [],
    profile_photo: '',
    cover_photo: ''
  };

  async componentDidMount() {
    const { setCountries, setInterests } = this.props;
    await setCountries(await countriesListAPI());
    await setInterests(await interestsListAPI());
  }

  async setValue(key, value) {
    const { setStates, setCities } = this.props;

    this.setState({ [key]: value });

    if (key === 'country_id') {
      await setStates(await statesListAPI(value._id));
    } else if (key === 'state_id') {
      await setCities(await citiesListAPI(value._id));
    }
  }

  setInterestsLocally(key, value) {
    if (key === 'unSelected') {
      this.setState({ user_interests: [...this.state.user_interests, value] });
    } else if (key === 'selected') {
      let filtered = this.state.user_interests.filter(
        interest => interest !== value
      );
      this.setState({ user_interests: filtered });
    }
  }

  async uploadImage(key, image) {
    let form = new FormData();
    form.append('upload_file', image);
    if (key === 'profile_photo') {
      let result = await uploadPictureAPI(form);
      if (result.status === 1) {
        this.setState({ profile_photo: result.location });
      } else {
        console.log('error........... Image not uploaded');
      }
    }
    if (key === 'cover_photo') {
      let result = await uploadPictureAPI(form);
      if (result.status === 1) {
        this.setState({ cover_photo: result.location });
      } else {
        console.log('error........... Image not uploaded');
      }
    }
  }

  async signupUser() {
    let data = await appendDataIntoForm(this.state);

    let result = await signupAPI(data);
    if (result.status === 200) {
      alert(result.message);
      this.props.navigation.navigate('Login');
    } else {
      alert(result.message);
    }
  }

  render() {
    return (
      <SignupView
        stateValues={this.state}
        allStateParentValues={this.state}
        setValue={this.setValue.bind(this)}
        signupUser={this.signupUser.bind(this)}
        setInterestsLocally={this.setInterestsLocally.bind(this)}
        uploadImage={this.uploadImage.bind(this)}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    allCountries: user.countries,
    allStates: user.states,
    allCities: user.cities,
    allInterests: user.interests
  };
};

const mapDispatchToProps = dispatch => ({
  setCountries: data => dispatch(setCountries(data)),
  setStates: data => dispatch(setStates(data)),
  setCities: data => dispatch(setCities(data)),
  setInterests: data => dispatch(setInterests(data))
});

const connectRedux = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectRedux(withAppHOC(Signup));
