import {createStore} from 'redux';
import appReducer from './reducers';
import reducer from './reducers/profilePage'

const store = createStore(reducer);
export default store;
