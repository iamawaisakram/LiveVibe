import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// * component
import TextInputSignup from '../TextInputSignup';

// * Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// * style
import styles from '../../assets/styles/signup';

export default props => {
  let textInputs = [
    {
      icon: 'mail',
      placeholder: 'Country',
      modal: true,
      inputKey: 'country_id'
    },
    {
      icon: 'direction',
      placeholder: 'State',
      modal: true,
      inputKey: 'state_id'
    },
    {
      icon: 'md-locate',
      placeholder: 'City',
      ionic: true,
      modal: true,
      inputKey: 'city_id'
    }
  ];
  return (
    <View>
      {textInputs.map((inputValue, i) => (
        <TextInputSignup
          allStateParentValues={props.allStateParentValues}
          key={i}
          action={props.setListingModalValue}
          {...inputValue}
        />
      ))}
      <View style={styles.selectGenderView}>
        <TouchableOpacity
          style={styles.genderCell}
          onPress={() => props.setValue('gender', 'Male')}
        >
          <View
            style={[
              styles.iconView,
              props.allStateParentValues['gender'] === 'Male' && {
                backgroundColor: '#651FFF'
              }
            ]}
          >
            <Icon name="male" color="#fff" size={25} />
          </View>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genderCell}
          onPress={() => props.setValue('gender', 'Female')}
        >
          <View
            style={[
              styles.iconView,
              props.allStateParentValues['gender'] === 'Female' && {
                backgroundColor: '#651FFF'
              }
            ]}
          >
            <Icon name="female" color="#fff" size={25} />
          </View>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
