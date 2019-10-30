import { createStore, applyMiddleware } from 'redux';

//MiddlerWares
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//root reducer
import rootReducer from './ducks';

//Create Store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
