/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';

// * StyleSheet
import styles from '../../assets/styles/splahsScreen';

export default () => {
  return (
    <Fragment>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/splash.png')}>
        <View style={styles.imageView}>
          <ImageBackground
            imageStyle={{ overflow: 'visible' }}
            style={styles.outermostCircle}
            source={require('../../assets/images/outermost.png')}>
            <ImageBackground
              style={styles.innerCircle}
              source={require('../../assets/images/inner.png')}>
              <ImageBackground
                style={styles.innermostCircle}
                source={require('../../assets/images/innermost.png')}>
                <Image
                  style={styles.splashText}
                  source={require('../../assets/images/splashText.png')}
                />
              </ImageBackground>
            </ImageBackground>
          </ImageBackground>
        </View>

        <View style={styles.textView}>
          <Text style={styles.statement}>Welcome to Live Vibe!</Text>
          <Text style={styles.description}>
            A Place to create events and socialize
          </Text>
        </View>
      </ImageBackground>
    </Fragment>
  );
};
