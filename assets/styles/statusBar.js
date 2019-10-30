import { StyleSheet, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
