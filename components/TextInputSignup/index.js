import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';

// * icons
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';

// * Style
import styles from '../../assets/styles/signup';

export default ({
  allStateParentValues,
  setValue,
  value,
  icon,
  placeholder,
  newAccount = false,
  inputKey,
  ionic = false,
  modal = false,
  action
}) => {
  let [focused, setFocus] = React.useState(false);
  let [passwordSecured, setPasswordSecured] = React.useState(true);
  let [confirmPasswordSecured, setConfirmPasswordSecured] = React.useState(
    true
  );
  if (modal) {
    return (
      <TouchableOpacity
        style={[styles.viewStyle]}
        onPress={() => action(inputKey)}
      >
        <View style={styles.iconStyle}>
          {ionic ? (
            <IonIcon name={icon} size={18} color="#999" />
          ) : (
            <Icon name={icon} size={18} color="#999" />
          )}
        </View>
        <Text style={[styles.placeholderButtonText]}>
          {allStateParentValues[inputKey] === ''
            ? placeholder
            : inputKey === 'dob'
            ? moment(allStateParentValues[inputKey]).format('YYYY MM DD')
            : inputKey === 'country_id' ||
              inputKey === 'state_id' ||
              inputKey === 'city_id'
            ? allStateParentValues[inputKey].name
            : allStateParentValues[inputKey]}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.viewStyle, focused && { backgroundColor: '#651FFF' }]}>
      <View style={styles.iconStyle}>
        {ionic ? (
          <IonIcon name={icon} size={18} color="#999" />
        ) : (
          <Icon name={icon} size={18} color="#999" />
        )}
      </View>
      <TextInput
        style={[styles.inputStyle, newAccount && { width: 200 }]}
        onChangeText={value => setValue(inputKey, value)}
        value={allStateParentValues[inputKey]}
        placeholderTextColor="#999"
        autoCompleteType={'off'}
        autoCorrect={false}
        secureTextEntry={
          inputKey === 'confirmPassword'
            ? confirmPasswordSecured
            : inputKey === 'password'
            ? passwordSecured
            : false
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
      />
      {newAccount && (
        <TouchableOpacity
          style={styles.showPasswordView}
          onPress={() =>
            inputKey === 'confirmPassword'
              ? setConfirmPasswordSecured(!confirmPasswordSecured)
              : setPasswordSecured(!passwordSecured)
          }
        >
          {inputKey === 'confirmPassword' && confirmPasswordSecured && (
            <IonIcon name="ios-eye" color="#999" size={18} />
          )}
          {inputKey === 'confirmPassword' && !confirmPasswordSecured && (
            <IonIcon name="ios-eye-off" color="#999" size={18} />
          )}
          {inputKey === 'password' && passwordSecured && (
            <IonIcon name="ios-eye" color="#999" size={18} />
          )}
          {inputKey === 'password' && !passwordSecured && (
            <IonIcon name="ios-eye-off" color="#999" size={18} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
