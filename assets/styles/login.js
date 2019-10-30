import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// * fonts
import { FONT_FAMILY } from '../../config';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topView: {
    width: '100%',
    height: '27%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    width: 177,
    height: 63
  },
  bottomView: {
    width: '100%',
    height: '73%',
    alignItems: 'center'
  },
  inputContainer: {
    width: 282,
    height: 45,
    marginTop: 40,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  header: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 12,
    color: '#fff',
    height: 16
  },
  input: {
    width: 282,
    fontFamily: FONT_FAMILY.regular,
    color: '#fff',
    fontSize: 14,
    borderBottomColor: '#fff',
    borderBottomWidth: 1
  },
  passwordIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    width: 35,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPassword: {
    width: 282,
    alignItems: 'flex-end',
    marginTop: hp('3%')
  },
  forgotPasswordText: {
    width: '40%',
    fontFamily: FONT_FAMILY.light,
    fontSize: 12,
    textAlign: 'right',
    color: '#fff'
  },
  loginButton: {
    width: 284,
    height: 48,
    backgroundColor: '#404091',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%')
  },
  loginText: {
    color: '#fff',
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: 16
  },
  signupWithEmailText: {
    fontFamily: FONT_FAMILY.regular,
    color: '#fff',
    fontSize: 12,
    marginTop: hp('4%')
  },
  orText: {
    fontFamily: FONT_FAMILY.regular,
    color: '#fff',
    fontSize: 12,
    marginTop: hp('1%')
  },
  socialLoginView: {
    width: 284,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2%')
  },
  googleView: {
    backgroundColor: 'transparent',
    width: 129,
    height: 44,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#D44638',
    borderWidth: 2,
    flexDirection: 'row'
  },
  fbView: {
    backgroundColor: 'transparent',
    width: 129,
    height: 44,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#0F4ED7',
    borderWidth: 2,
    flexDirection: 'row'
  },
  socialText: {
    color: '#fff',
    fontFamily: FONT_FAMILY.medium,
    fontSize: 12
  },
  swipeView: {
    width: 290,
    height: 55,
    marginTop: '4%',
    zIndex: 11111
  },
  swipeTextView: {
    width: 240,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swipeText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.light,
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginLeft: 30
  }
});
