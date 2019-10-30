import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// * fonts
import { FONT_FAMILY } from '../../config';

export default StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#272735',
    alignItems: 'center'
  },
  headerView: {
    marginTop: hp('10%'),
    width: 294,
    height: 73,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
    // borderWidth: 1,
    // borderColor: '#fff'
  },
  headerTextLeftView: {
    width: 149,
    height: 73
  },
  leftText: {
    fontFamily: FONT_FAMILY.semiBold,
    color: '#fff',
    fontSize: 28,
    textAlign: 'left'
  },
  headerTextRightView: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginBottom: hp('1%')
      },
      ios: {
        marginBottom: hp('0.5%')
      }
    })
  },
  rightText: {
    color: '#fff',
    fontSize: 19,
    fontFamily: FONT_FAMILY.medium
  },
  rightActiveText: {
    color: '#651FFF',
    fontSize: 21,
    fontFamily: FONT_FAMILY.medium
  },
  rightBottomText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: FONT_FAMILY.regular
  },
  middleComponent: {
    marginTop: hp('5%')
  },
  bottomButtonsPanel: {
    position: 'absolute',
    bottom: hp('8%'),
    width: wp('90%'),
    height: 56,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
    // borderWidth: 1,
    // borderColor: '#fff'
  },
  leftButton: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25
  },
  rightButton: {
    height: 46,
    width: 123,
    backgroundColor: '#651FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightButtonText: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: '#fff'
  },
  viewStyle: {
    width: 294,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#333B51',
    margin: 5
  },
  iconStyle: {
    width: 50,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    width: 240,
    height: 42,
    color: '#fff',
    fontFamily: FONT_FAMILY.regular
  },
  showPasswordView: {
    width: 40,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectGenderView: {
    width: 294,
    height: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: hp('1%')
  },
  genderCell: {
    width: 97,
    height: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  iconView: {
    width: 37,
    height: 37,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333B51'
  },
  genderText: {
    width: 55,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semiBold,
    color: '#fff',
    textAlign: 'left'
  },
  picturesView: {
    width: 294,
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  profilePictureView: {
    width: 102,
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uploadProfilePicture: {
    width: 102,
    height: 102,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#651FFF'
  },
  profileImage: {
    width: 102,
    height: 102,
    borderRadius: 51,
    resizeMode: 'cover'
  },
  pictureText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center'
  },
  coverPictureView: {
    width: 151,
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uploadCoverPicture: {
    width: 151,
    height: 102,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#651FFF'
  },
  coverImage: {
    width: 151,
    height: 102,
    borderRadius: 5,
    resizeMode: 'cover'
  },
  interestsView: {
    width: 281,
    height: 281,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  interestCell: {
    width: 87,
    height: 87,
    borderRadius: 44,
    borderWidth: 1,
    borderColor: '#651FFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3
  },
  interestImage: {
    width: 87,
    height: 87,
    borderRadius: 44,
    resizeMode: 'cover',
    zIndex: 10
  },
  interestText: {
    color: '#fff',
    fontFamily: FONT_FAMILY.regular,
    fontSize: 13,
    position: 'absolute',
    textAlign: 'center',
    zIndex: 111
  },
  interestHeader: {
    marginTop: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  intersetTitleText: {
    fontSize: 30,
    fontFamily: FONT_FAMILY.medium,
    color: '#fff',
    width: 179,
    textAlign: 'center'
  },
  intersetSubtitleText: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: 'rgba(255,255,255,0.5)',
    width: 238,
    textAlign: 'center',
    marginTop: 10
  },
  swiper: {
    ...Platform.select({
      android: {
        zIndex: 111,
        borderColor: '#fff',
        borderWidth: 1,
        width: 380
      }
    })
  },
  pagination: {
    ...Platform.select({
      android: {
        marginBottom: hp('15')
      },
      ios: {
        marginBottom: hp('20')
      }
    })
  },
  slide: {
    width: wp('100%'),
    height: 381,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        zIndex: 111
      }
    })
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
  placeholderButtonText: {
    color: '#999',
    fontFamily: FONT_FAMILY.regular,
    width: 240,
    height: 42,
    marginTop: hp('2.5%')
  },
  calendarModal: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  doneButton: {
    height: 46,
    width: 123,
    backgroundColor: '#651FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginBottom: hp('5%')
  },
  modalScrollView: {
    width: wp('95%'),
    height: hp('60%'),
    marginTop: hp('8%')
  },
  modalContent: {
    alignItems: 'center'
  },
  listItem: {
    width: wp('90%'),
    height: hp('5%'),
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#272735',
    justifyContent: 'space-between',
    borderRadius: 17
  },
  listItemText: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: '#fff',
    width: wp('70%'),
    textAlign: 'left',
    marginLeft: wp('5%')
  }
});
