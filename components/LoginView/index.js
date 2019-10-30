import React, { Fragment } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import RNSwipeVerify from 'react-native-swipe-verify';

// * Icons
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntIcon from 'react-native-vector-icons/AntDesign';

// * Style
import styles from '../../assets/styles/login';

export default props => {
  let [secured, setSecured] = React.useState(true);
  return (
    <Fragment>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/splash.png')}
      >
        <View style={styles.topView}>
          <Image
            style={styles.logoText}
            source={require('../../assets/images/splashText.png')}
          />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>USERNAME</Text>
            <TextInput
              style={[
                styles.input,
                props.stateValues.errors.email && {
                  borderBottomColor: 'red'
                }
              ]}
              autoCorrect={false}
              autoCompleteType={'off'}
              onChangeText={value => props.setValue('email', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Password</Text>
            <TextInput
              style={[
                styles.input,
                props.stateValues.errors.password && {
                  borderBottomColor: 'red'
                }
              ]}
              autoCorrect={false}
              autoCompleteType={'off'}
              onChangeText={value => props.setValue('password', value)}
              secureTextEntry={secured}
            />
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={() => setSecured(!secured)}
            >
              {secured && <IonIcon name="ios-eye" color="#fff" size={20} />}
              {!secured && (
                <IonIcon name="ios-eye-off" color="#fff" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              props.loginUser();
              // props.navigation.navigate('Interests')
            }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.signupWithEmailText}>
              Sign Up With Email Address
            </Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.socialLoginView}>
            <TouchableOpacity style={styles.googleView}>
              <IonIcon name="logo-google" color="#fff" size={15} />
              <Text style={styles.socialText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbView}>
              <FontistoIcon name="facebook" color="#fff" size={15} />
              <Text style={styles.socialText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.swipeView}>
            <RNSwipeVerify
              ref={ref => (this.swipeVerify2 = ref)}
              width={256}
              buttonSize={55}
              buttonColor="#651FFF"
              backgroundColor="rgba(101,31,255,0.5)"
              textColor="#37474F"
              borderRadius={27.5}
              okButton={{ visible: true, duration: 400 }}
              onVerified={() => {
                alert('Find Hubs!');
                this.swipeVerify2.reset();
              }}
              icon={<IonIcon name="ios-pin" color="#9873EA" size={20} />}
            >
              <View style={styles.swipeTextView}>
                <Text style={styles.swipeText}>Swipe to discover hubs</Text>
                <AntIcon
                  style={{ position: 'absolute', right: 0 }}
                  name="doubleright"
                  color="#fff"
                  size={10}
                />
              </View>
            </RNSwipeVerify>
          </View>
        </View>
      </ImageBackground>
    </Fragment>
  );
};
