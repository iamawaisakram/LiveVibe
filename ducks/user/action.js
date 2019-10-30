// * Keys For Store
import {
  SET_USER,
  SET_ALL_INTERESTS,
  SET_ALL_COUNTRIES,
  SET_ALL_STATES,
  SET_ALL_CITIES
} from './actionKeys';

// ? Set user after user logged In
export const setUser = data => {
  return {
    type: SET_USER,
    payload: data
  };
};

export const setInterests = data => {
  return {
    type: SET_ALL_INTERESTS,
    payload: data
  };
};

export const setCountries = data => {
  return {
    type: SET_ALL_COUNTRIES,
    payload: data
  };
};

export const setStates = data => {
  return {
    type: SET_ALL_STATES,
    payload: data
  };
};

export const setCities = data => {
  return {
    type: SET_ALL_CITIES,
    payload: data
  };
};
