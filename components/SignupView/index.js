import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// * Signup Screens
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import InterestsView from '../InterestsView';

// * Components
import CalenderModalView from '../CalenderModalView';
import SelectModalView from '../SelectModalView';

// * Icons
import Icon from 'react-native-vector-icons/AntDesign';

// * style
import styles from '../../assets/styles/signup';

// * UTILS ACTIONS
import { EMAIL_REGEX } from '../../utilities/validations';

class SignupView extends Component {
  state = {
    signupStep: 1,
    showCalenderModal: false,
    showListingModal: false,
    listing: []
  };

  stepsIncrease() {
    const { signupStep } = this.state;
    const { allStateParentValues } = this.props;
    let errorsArray = [];
    if (signupStep === 1) {
      if (!allStateParentValues.name) {
        errorsArray.push('Name Field is Mandatory!');
      }
      if (!allStateParentValues.phone) {
        errorsArray.push('Phone Field is Mandatory!');
      }
      if (
        allStateParentValues.phone &&
        allStateParentValues.phone.length < 10
      ) {
        errorsArray.push('Phone Length Cannot be less then 10!');
      }
      if (!allStateParentValues.email) {
        errorsArray.push('Email Field is Mandatory!');
      }
      if (allStateParentValues.email) {
        let test = EMAIL_REGEX.regex.test(allStateParentValues.email);
        if (!test) {
          errorsArray.push('Email is Invalid!');
        }
      }
    }

    if (signupStep === 2) {
      if (!allStateParentValues.country_id) {
        errorsArray.push('Country Field is Mandatory!');
      }
      if (!allStateParentValues.state_id) {
        errorsArray.push('State Field is Mandatory!');
      }
      if (!allStateParentValues.city_id) {
        errorsArray.push('City Field is Mandatory!');
      }
      if (!allStateParentValues.gender) {
        errorsArray.push('Gender Field is Mandatory!');
      }
    }

    if (signupStep === 3) {
      if (!allStateParentValues.profile_photo) {
        errorsArray.push('Profile Image is Mandatory!');
      }
      if (!allStateParentValues.password) {
        errorsArray.push('Password Field is Mandatory!');
      }
      if (
        allStateParentValues.password &&
        allStateParentValues.password.length < 8
      ) {
        errorsArray.push('Password Length Must be greater then 8!');
      }

      if (!allStateParentValues.confirmPassword) {
        errorsArray.push('Confirm Password Field is Mandatory!');
      }
      if (
        allStateParentValues.password !== allStateParentValues.confirmPassword
      ) {
        errorsArray.push('Password and Confirm Password doesnt matches!');
      }
    }

    if (signupStep === 4) {
      if (!allStateParentValues.user_interests[0]) {
        errorsArray.push('Kindly Select your Interests!');
      }
    }

    if (signupStep < 4) {
      if (errorsArray[0]) {
        alert(errorsArray.map(error => error));
        return;
      } else {
        this.setState({ signupStep: signupStep + 1 });
      }
    }
  }

  stepDecrease() {
    if (this.state.signupStep > 1) {
      this.setState({ signupStep: this.state.signupStep - 1 });
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  setCalendarModalValue() {
    this.setState({ showCalenderModal: !this.state.showCalenderModal });
  }

  setListingModalValue(key) {
    const { allCountries, allStates, allCities } = this.props;

    switch (key) {
      case 'country_id':
        return this.setState({
          listing: allCountries,
          keyForModal: 'country_id',
          showListingModal: true
        });
      case 'state_id':
        return this.setState({
          listing: allStates,
          keyForModal: 'state_id',
          showListingModal: true
        });
      case 'city_id':
        return this.setState({
          listing: allCities,
          keyForModal: 'city_id',
          showListingModal: true
        });
      default:
        break;
    }
  }

  closeListingModal() {
    this.setState({ showListingModal: false });
  }

  render() {
    const {
      signupStep,
      showCalenderModal,
      showListingModal,
      listing,
      keyForModal
    } = this.state;
    return (
      <View style={styles.backgroundView}>
        {signupStep !== 4 && (
          <View style={styles.headerView}>
            <View style={styles.headerTextLeftView}>
              <Text style={styles.leftText}>New Account</Text>
            </View>
            <View style={styles.headerTextRightView}>
              <Text style={styles.rightText}>
                <Text style={styles.rightActiveText}>{signupStep}</Text> / 3
              </Text>
              <Text style={styles.rightBottomText}>STEPS</Text>
            </View>
          </View>
        )}
        {signupStep !== 4 && (
          <View style={styles.middleComponent}>
            {signupStep === 1 && (
              <StepOne
                setCalendarModalValue={this.setCalendarModalValue.bind(this)}
                {...this.props}
              />
            )}
            {signupStep === 2 && (
              <StepTwo
                setListingModalValue={this.setListingModalValue.bind(this)}
                {...this.props}
              />
            )}
            {signupStep === 3 && <StepThree {...this.props} />}
          </View>
        )}
        {signupStep === 4 && (
          <InterestsView
            setInterestsLocally={this.props.setInterestsLocally}
            allInterests={this.props.allInterests}
            allStateParentValues={this.props.allStateParentValues}
          />
        )}

        <CalenderModalView
          showCalenderModal={showCalenderModal}
          date={this.props.allStateParentValues['dob']}
          setCalendarModalValue={this.setCalendarModalValue.bind(this)}
          selectedDate={this.props.setValue}
        />

        <SelectModalView
          data={listing}
          showListingModal={showListingModal}
          setListingModalValue={this.closeListingModal.bind(this)}
          setValue={this.props.setValue}
          allStateParentValues={this.props.allStateParentValues}
          keyForModal={keyForModal}
        />

        <View style={styles.bottomButtonsPanel}>
          <TouchableOpacity
            style={styles.leftButton}
            onPress={() => this.stepDecrease()}
          >
            <Icon name="arrowleft" color="#651FFF" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightButton}
            onPress={() => {
              signupStep !== 4 && this.stepsIncrease();
              signupStep === 4 && this.props.signupUser();
            }}
          >
            {signupStep !== 4 && (
              <Text style={styles.rightButtonText}>Next</Text>
            )}
            {signupStep === 4 && (
              <Text style={styles.rightButtonText}>Sign Up</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignupView;
