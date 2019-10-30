import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

// * component
import TextInputSignup from '../TextInputSignup';

// * Icons
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

// * style
import styles from '../../assets/styles/signup';

export default props => {
  // let textInputs = [{ icon: 'mail', placeholder: 'Email', inputKey: 'email' }];
  let [focused, setFocus] = React.useState(false);
  return (
    <View style={styles.backgroundView}>
      <View style={styles.headerView}>
        <View style={styles.headerTextLeftView}>
          <Text style={styles.leftText}>Forgot Password</Text>
        </View>
        <View style={styles.headerTextRightView}>
          <Text style={styles.rightText}>
            <Text style={styles.rightActiveText}></Text>
          </Text>
          <Text style={styles.rightBottomText}></Text>
        </View>
      </View>

      <View style={styles.middleComponent}>
        {props.allStateParentValues.showEmail && (
          <View
            style={[
              styles.viewStyle,
              focused && { backgroundColor: '#651FFF' }
            ]}
          >
            <View style={styles.iconStyle}>
              <EntypoIcon name={'mail'} size={18} color="#999" />
            </View>
            <TextInput
              style={[styles.inputStyle]}
              autoCompleteType={'off'}
              autoCorrect={false}
              onChangeText={value => props.setValue('email', value)}
              value={props.allStateParentValues['email']}
              placeholderTextColor="#999"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder={'Email'}
            />
          </View>
        )}

        {props.allStateParentValues.showOtp && (
          <View
            style={[
              styles.viewStyle,
              focused && { backgroundColor: '#651FFF' }
            ]}
          >
            <View style={styles.iconStyle}>
              <EntypoIcon name={'lock'} size={18} color="#999" />
            </View>
            <TextInput
              style={[styles.inputStyle]}
              autoCompleteType={'off'}
              autoCorrect={false}
              onChangeText={value => props.setValue('otp', value)}
              value={props.allStateParentValues['otp']}
              placeholderTextColor="#999"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder={'OTP'}
            />
          </View>
        )}
        {props.allStateParentValues.showPassword && (
          <View
            style={[
              styles.viewStyle,
              focused && { backgroundColor: '#651FFF' }
            ]}
          >
            <View style={styles.iconStyle}>
              <EntypoIcon name={'lock'} size={18} color="#999" />
            </View>
            <TextInput
              style={[styles.inputStyle]}
              autoCompleteType={'off'}
              autoCorrect={false}
              onChangeText={value => props.setValue('new_password', value)}
              value={props.allStateParentValues['new_password']}
              placeholderTextColor="#999"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder={'New Password'}
            />
          </View>
        )}
      </View>

      <View style={styles.bottomButtonsPanel}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Icon name="arrowleft" color="#651FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => {
            if (props.allStateParentValues.key === 'otp') {
              props.checkOtp();
            } else if (props.allStateParentValues.key === 'email') {
              props.forgotPassword();
            } else if (props.allStateParentValues.key === 'password') {
              props.resetPassword();
            }
          }}
        >
          <Text style={styles.rightButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
