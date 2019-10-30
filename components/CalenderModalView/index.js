import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import DatePicker from 'react-native-date-picker';

// * style
import styles from '../../assets/styles/signup';

export default props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.showCalenderModal}
      onRequestClose={() => {
        props.setCalendarModalValue();
      }}
    >
      <View style={styles.calendarModal}>
        <DatePicker
          date={props.date}
          onDateChange={date => props.selectedDate('dob', date)}
          mode={'date'}
          textColor="#651FFF"
        />
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            props.setCalendarModalValue();
          }}
        >
          <Text style={styles.rightButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
