import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// * fonts
import { FONT_FAMILY } from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333333'
  },
  swiper: {
    ...Platform.select({
      android: {
        zIndex: 111,
        width: wp('100%')
      }
    })
  },
  slide: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        zIndex: 111,
        width: wp('100%')
      }
    }),
    zIndex: 111
  },
  inactiveDot: {
    backgroundColor: 'rgba(101, 31, 255, 0.5)',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: '#651FFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  skipButton: {
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp('3%'),
    right: wp('5%'),
    zIndex: 5
  },
  skipText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.regular,
    color: '#fff'
  },
  introCircles: {
    width: 440,
    height: 440,
    position: 'absolute',
    left: -10,
    top: hp('5%'),
    ...Platform.select({
      ios: {
        left: -33
      }
    })
  },
  mobile: {
    zIndex: 6,
    position: 'absolute',
    top: hp('20%')
  },
  intro1: {
    zIndex: 6,
    position: 'absolute',
    top: hp('20%'),
    right: wp('23%')

    // ...Platform.select({
    //   android: {
    //     right: wp('23%')
    //   },
    //   ios: {
    //     right: wp('19%')
    //   }
    // })
  },
  intro2Mobile: {
    zIndex: 6,
    position: 'absolute',
    top: hp('20%'),
    ...Platform.select({
      android: {
        left: wp('23%')
      },
      ios: {
        left: wp('19%')
      }
    })
  },
  intro2Boy: {
    zIndex: 6,
    position: 'absolute',
    top: hp('29%'),
    right: wp('14%')
  },
  intro4Man: {
    zIndex: 6,
    position: 'absolute',
    ...Platform.select({
      android: {
        top: hp('52%'),
        right: wp('38%')
      },
      ios: {
        top: hp('47%'),
        right: wp('40%')
      }
    })
  },
  intro4Mobile: {
    zIndex: 6,
    position: 'absolute',
    top: hp('20%'),
    right: wp('25%')
  },
  textView: {
    position: 'absolute',
    bottom: hp('12.5%')
  },
  headText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: FONT_FAMILY.medium,
    fontSize: 18,
    width: 325
  },
  subHeadText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: FONT_FAMILY.light,
    fontSize: 14,
    width: 312,
    marginTop: 5
  }
});
