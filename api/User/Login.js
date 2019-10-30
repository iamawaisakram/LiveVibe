import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// * Server URL
import { SERVER_URL } from '../../config';

export const loginAPI = async data => {
  let result = await axios.post(`${SERVER_URL}/login`, data);

  if (result.data && result.data.status === 200) {
    await AsyncStorage.setItem('token', result.data.data.token);
    return {
      status: result.data.status,
      message: result.data.message,
      user: result.data.data.user
    };
  }

  if (result.data && result.data.status !== 200) {
    return { status: result.data.status, message: result.data.message };
  }
};
