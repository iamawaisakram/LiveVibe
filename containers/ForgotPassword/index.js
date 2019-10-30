import React, { Component } from 'react';

// * HOC
import withAppHOC from '../../hocs/withAppHOC';

// * View Component
import ForgotPasswordView from '../../components/ForgotPasswordView';

// * API Call
import {
  forgotPasswordAPI,
  checkOtpAPI,
  resetPasswordAPI
} from '../../api/User/ForgotPassword';
import { EMAIL_REGEX } from '../../utilities/validations';

class ForgotPassword extends Component {
  state = {
    email: '',
    otp: '',
    showOtp: false,
    showEmail: true,
    showPassword: false,
    new_password: '',
    key: 'email'
  };

  setValue(key, value) {
    this.setState({ [key]: value });
  }

  async forgotPassword() {
    let result = await forgotPasswordAPI(this.state.email);
    if (result.status === 200) {
      alert(result.message);
      this.setState({ showOtp: true, showEmail: false, key: 'otp' });
    } else {
      alert(result.message);
    }
  }

  async checkOtp() {
    let result = await checkOtpAPI({
      email: this.state.email,
      forgot_password_token: this.state.otp
    });
    if (result.status === 200) {
      alert(result.message);
      this.setState({
        showOtp: false,
        showEmail: false,
        showPassword: true,
        key: 'password'
      });
    } else {
      alert(result.message);
    }
  }

  async resetPassword() {
    let result = await resetPasswordAPI({
      email: this.state.email,
      new_password: this.state.new_password
    });
    if (result.status === 200) {
      alert(result.message);
      this.props.navigation.navigate('Login');
    } else {
      alert(result.message);
    }
  }

  render() {
    return (
      <ForgotPasswordView
        allStateParentValues={this.state}
        setValue={this.setValue.bind(this)}
        checkOtp={this.checkOtp.bind(this)}
        resetPassword={this.resetPassword.bind(this)}
        forgotPassword={this.forgotPassword.bind(this)}
        {...this.props}
      />
    );
  }
}

export default withAppHOC(ForgotPassword);
