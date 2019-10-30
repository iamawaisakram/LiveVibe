import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * View Component
import LoginView from '../../components/LoginView';
import { loginAPI } from '../../api/User/Login';

// * action
import { setUser } from '../../ducks/user/action';

// * Utils actions
import { EMAIL_REGEX } from '../../utilities/validations';

class Login extends Component {
  state = {
    email: '',
    password: '',
    device_type: Platform.OS === 'android' ? 'android' : 'ios',
    device_token: 'device_token',
    errors: {
      email: false,
      password: false
    }
  };

  setValue(key, value) {
    this.setState({ [key]: value });
  }

  async loginUser() {
    const { errors, email, password, device_token, device_type } = this.state;
    await this.validation();

    if (!errors.email || !errors.password) {
      let data = await loginAPI({ email, password, device_token, device_type });
      if (data && data.status === 200) {
        await this.props.setUser(data.user);
        alert(data.message);
      } else {
        alert(data.message);
      }
    }
  }

  validation() {
    const { email, password, errors } = this.state;

    if (!email && !password) {
      alert('Kindly fill in the required fields!');
      errors.email = true;
      errors.password = true;
      this.setState({ errors });
      return;
    }
    if (!email) {
      alert('Kindly provide Email Address!');
      errors.email = true;
      errors.password = false;
      this.setState({ errors });
      return;
    }
    if (!password) {
      alert('Kindly provide Password Address!');
      errors.password = true;
      errors.email = false;
      this.setState({ errors });
      return;
    }

    let test = EMAIL_REGEX.regex.test(email);
    if (!test) {
      errors.email = true;
      this.setState({ errors });
      alert('Email is not Valid!');
    } else {
      errors.email = false;
      this.setState({ errors });
    }
    if (password.length < 8) {
      errors.password = true;
      alert('Password Length should be greater than 8!');
      this.setState({ errors });
    } else {
      errors.password = false;
      this.setState({ errors });
    }
  }

  render() {
    return (
      <LoginView
        setValue={this.setValue.bind(this)}
        loginUser={this.loginUser.bind(this)}
        stateValues={this.state}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: data => dispatch(setUser(data))
});

const connectRedux = connect(
  null,
  mapDispatchToProps
);

export default connectRedux(withAppHOC(Login));
