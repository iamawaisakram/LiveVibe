import axios from 'axios';

// * Server URL
import { SERVER_URL } from '../../config';

export const forgotPasswordAPI = async email => {
  let result = await axios.post(`${SERVER_URL}/forgot-password`, { email });
  return result.data;
};

export const checkOtpAPI = async data => {
  let result = await axios.post(`${SERVER_URL}/check-otp-password`, data);
  return result.data;
};

export const resetPasswordAPI = async data => {
  let result = await axios.post(`${SERVER_URL}/reset-password`, data);
  return result.data;
};
