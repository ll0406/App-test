import {createStore} from 'redux';
import rootReducer from './reducers';
import profileReducer from './reducers/profilePage'

const store = createStore(profileReducer);
export default store;
