import React from 'react';
import { View } from 'react-native';

// * component
import TextInputSignup from '../TextInputSignup';

export default props => {
  let textInputs = [
    { icon: 'user', placeholder: 'Name', inputKey: 'name' },
    { icon: 'mobile', placeholder: 'Phone Number', inputKey: 'phone' },
    { icon: 'mail', placeholder: 'Email', inputKey: 'email' },
    {
      icon: 'cake',
      placeholder: 'YYYY-MM-DD',
      inputKey: 'dob',
      modal: true,
      modalType: 'calendar'
    }
  ];
  return (
    <View>
      {textInputs.map((inputValue, i) => (
        <TextInputSignup
          allStateParentValues={props.allStateParentValues}
          action={props.setCalendarModalValue}
          setValue={props.setValue}
          key={i}
          {...inputValue}
        />
      ))}
    </View>
  );
};
