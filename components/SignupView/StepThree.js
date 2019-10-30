import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// * component
import TextInputSignup from '../TextInputSignup';

// * Icons
import Icon from 'react-native-vector-icons/Entypo';

// * style
import styles from '../../assets/styles/signup';

export default props => {
  let textInputs = [
    {
      icon: 'lock',
      placeholder: 'Password',
      newAccount: true,
      inputKey: 'password',
    },
    {
      icon: 'lock',
      placeholder: 'Confirm Password',
      newAccount: true,
      inputKey: 'confirmPassword',
    },
  ];

  let [profileImage, setProfileImage] = React.useState('');
  let [coverImage, setCoverImage] = React.useState('');

  const uploadProfileImage = async () => {
    await ImagePicker.showImagePicker({
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then(image => {
        setProfileImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        props.uploadImage('profile_photo', {
          uri: image.path,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
      })
      .catch(e => console.log('Error', e));
  };

  const uploadCoverImage = async () => {
    await ImagePicker.openPicker({
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then(image => {
        setCoverImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        props.uploadImage('cover_photo', {
          uri: image.path,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
      })
      .catch(e => console.log('Error', e));
  };

  return (
    <View>
      <View style={styles.picturesView}>
        <View style={styles.profilePictureView}>
          <TouchableOpacity
            style={styles.uploadProfilePicture}
            onPress={() => uploadProfileImage()}>
            {!profileImage && <Icon name="link" size={30} color="#1AEEF1" />}
            {profileImage !== '' && (
              <Image
                style={styles.profileImage}
                source={{uri: profileImage.uri}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.pictureText}>Profile Picture</Text>
        </View>
        <View style={styles.coverPictureView}>
          <TouchableOpacity
            style={styles.uploadCoverPicture}
            onPress={() => uploadCoverImage()}>
            {!coverImage && <Icon name="link" size={30} color="#1AEEF1" />}
            {coverImage !== '' && (
              <Image style={styles.coverImage} source={{uri: coverImage.uri}} />
            )}
          </TouchableOpacity>
          <Text style={styles.pictureText}>Cover Picture (Optional)</Text>
        </View>
      </View>
      {textInputs.map((inputValue, i) => (
        <TextInputSignup
          key={i}
          allStateParentValues={props.allStateParentValues}
          setValue={props.setValue}
          {...inputValue}
        />
      ))}
    </View>
  );
};
