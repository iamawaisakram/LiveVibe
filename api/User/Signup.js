import axios from 'axios';

// * Server URL
import { SERVER_URL } from '../../config';

let options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export const signupAPI = async data => {
  let result = await axios.post(`${SERVER_URL}/signup`, data, options);
  return result.data;
};

export const countriesListAPI = async () => {
  let result = await axios.get(`${SERVER_URL}/countries/list`);
  return result.data.data;
};

export const statesListAPI = async countryId => {
  let result = await axios.get(`${SERVER_URL}/states/list/${countryId}`);
  return result.data.data;
};

export const citiesListAPI = async stateId => {
  let result = await axios.get(`${SERVER_URL}/cities/list/${stateId}`);
  return result.data.data;
};

export const interestsListAPI = async () => {
  let result = await axios.get(`${SERVER_URL}/interests/list`);
  return result.data.data;
};

export const uploadPictureAPI = async image => {
  let result = await axios.post(`${SERVER_URL}/gallery/upload`, image, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return result.data.message;
};
