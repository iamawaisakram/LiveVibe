import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

// * Style
import styles from '../../assets/styles/intro';

export default props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <ImageBackground
        imageStyle={styles.introCircles}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'contain'}
        source={require('../../assets/images/intro-circles.png')}
      >
        <Swiper
          style={styles.swiper}
          dot={<View style={styles.inactiveDot} />}
          activeDot={<View style={styles.activeDot} />}
          loop={false}
        >
          <View style={styles.slide}>
            <Image
              style={styles.intro1}
              source={require('../../assets/images/intro1.png')}
            />
            <View style={styles.textView}>
              <Text style={styles.headText}>Welcome To Livevibe</Text>
              <Text style={styles.subHeadText}>
                A place to engage with others one event Hub at a time.
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.intro2Mobile}
              source={require('../../assets/images/intro2-mobile.png')}
            />
            <Image
              style={styles.intro2Boy}
              source={require('../../assets/images/intro2-boy.png')}
            />
            <View style={styles.textView}>
              <Text style={styles.headText}>
                Create event hubs & it’s community
              </Text>
              <Text style={styles.subHeadText}>
                Whether its a private celebration or a huge festival, everyone
                at the event can post their content to one lean space, the Hub
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.intro1}
              source={require('../../assets/images/intro3.png')}
            />
            <View style={styles.textView}>
              <Text style={styles.headText}>Post On Hubs</Text>
              <Text style={styles.subHeadText}>
                Discover people and their content when they post on hubs or
                become discoverd when you post to one too.
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.intro4Mobile}
              source={require('../../assets/images/intro4-mobile.png')}
            />
            <Image
              style={styles.intro4Man}
              source={require('../../assets/images/intro4-man.png')}
            />
            <View style={styles.textView}>
              <Text style={styles.headText}>Create Profile</Text>
              <Text style={styles.subHeadText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                id orci nec nibh congue convallis.
              </Text>
            </View>
          </View>
        </Swiper>
      </ImageBackground>
    </View>
  );
};
