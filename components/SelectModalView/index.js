import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';

// * Icon
import IonIcon from 'react-native-vector-icons/Ionicons';

// * style
import styles from '../../assets/styles/signup';

export default props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.showListingModal}
      onRequestClose={() => {
        props.setListingModalValue();
      }}
    >
      <View style={styles.calendarModal}>
        <ScrollView
          style={styles.modalScrollView}
          contentContainerStyle={styles.modalContent}
        >
          {props.data &&
            props.data.map((item, index) => (
              <TouchableOpacity
                onPress={() => props.setValue(props.keyForModal, item)}
                style={styles.listItem}
                key={index}
              >
                <Text style={styles.listItemText}>{item.name}</Text>
                {props.allStateParentValues[props.keyForModal] === item && (
                  <IonIcon
                    name="ios-checkmark-circle"
                    size={20}
                    style={{ marginRight: 15 }}
                    color={'#fff'}
                  />
                )}
              </TouchableOpacity>
            ))}
          {!props.data[0] && (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                {props.keyForModal === 'state_id'
                  ? 'Kindly Select a Country First!'
                  : props.keyForModal === 'city_id' &&
                    'Kidnly Select a Country then a State!'}
              </Text>
            </View>
          )}
        </ScrollView>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            props.setListingModalValue();
          }}
        >
          <Text style={styles.rightButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
