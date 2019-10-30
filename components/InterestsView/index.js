import React from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import Swiper from 'react-native-swiper';

// * Icons
import Icon from 'react-native-vector-icons/AntDesign';

// * style
import styles from '../../assets/styles/signup';

class InterestsView extends React.Component {
  state = {
    result: []
  };

  async componentDidMount() {
    const { allInterests } = this.props;
    this.setState({
      result: await this.splitIntoSubArray(allInterests, 9)
    });
  }

  splitIntoSubArray(arr, count) {
    var newArray = [];
    while (arr.length > 0) {
      newArray.push(arr.splice(0, count));
    }
    return newArray;
  }

  render() {
    const { result } = this.state;
    const { setInterestsLocally, allStateParentValues } = this.props;
    return (
      <View style={styles.backgroundView}>
        <View style={styles.interestHeader}>
          <Text style={styles.intersetTitleText}>Select your interests</Text>
          <Text style={styles.intersetSubtitleText}>
            What type of events would you like to see
          </Text>
        </View>
        <Swiper
          style={styles.swiper}
          dot={<View style={styles.inactiveDot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={styles.pagination}
          loop={false}
        >
          {result &&
            result.map((interesets, i) => {
              return (
                <View key={i} style={styles.slide}>
                  <View style={styles.interestsView}>
                    {interesets.map((interest, i) => (
                      <TouchableOpacity
                        key={i}
                        style={[
                          styles.interestCell,
                          allStateParentValues &&
                            allStateParentValues.user_interests.includes(
                              interest._id
                            ) && { backgroundColor: '#651FFF' }
                        ]}
                        onPress={() => {
                          if (
                            allStateParentValues &&
                            allStateParentValues.user_interests.includes(
                              interest._id
                            )
                          ) {
                            setInterestsLocally('selected', interest._id);
                          } else {
                            setInterestsLocally('unSelected', interest._id);
                          }
                        }}
                      >
                        {allStateParentValues &&
                          allStateParentValues.user_interests.includes(
                            interest._id
                          ) && (
                            <Icon
                              name="check"
                              size={20}
                              color="#fff"
                              style={{ marginBottom: 40 }}
                            />
                          )}
                        <Text
                          style={[
                            styles.interestText,
                            allStateParentValues &&
                              allStateParentValues.user_interests.includes(
                                interest._id
                              ) && { marginTop: 3 }
                          ]}
                        >
                          {interest.name}
                        </Text>
                        {allStateParentValues &&
                          !allStateParentValues.user_interests.includes(
                            interest._id
                          ) && (
                            <Image
                              source={{ uri: interest.image }}
                              style={styles.interestImage}
                            />
                          )}
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              );
            })}
        </Swiper>
      </View>
    );
  }
}

export default InterestsView;
