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
    width: '100%'
  },
  splashText: {
    width: 177,
    height: 63,
    resizeMode: 'contain'
  },
  imageView: {
    height: wp('104%')
  },
  outermostCircle: {
    width: wp('101%'),
    height: wp('101%'),
    ...Platform.select({
      android: {
        overflow: 'visible'
      },
      ios: {
        marginTop: 30
      }
    }),
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: wp('97%'),
    height: wp('97%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  innermostCircle: {
    width: wp('80%'),
    height: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textView: {
    position: 'absolute',
    bottom: 60,
    width: wp('90%'),
    marginLeft: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  statement: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: 25,
    color: '#fff'
  },
  description: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 16,
    color: '#fff',
    width: wp('60%'),
    marginTop: 15,
    textAlign: 'center'
  }
});
