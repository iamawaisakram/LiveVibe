// * Keys
import {
  SET_USER,
  SET_ALL_INTERESTS,
  SET_ALL_COUNTRIES,
  SET_ALL_STATES,
  SET_ALL_CITIES
} from './actionKeys';

const initialState = {
  currentUser: undefined,
  interests: [],
  countries: [],
  states: [],
  cities: []
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, currentUser: action.payload };

    case SET_ALL_INTERESTS:
      return { ...state, interests: action.payload };

    case SET_ALL_COUNTRIES:
      return { ...state, countries: action.payload };

    case SET_ALL_STATES:
      return { ...state, states: action.payload };

    case SET_ALL_CITIES:
      return { ...state, cities: action.payload };

    default:
      return { ...state };
  }
}
