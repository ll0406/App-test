import {combineReducers} from 'redux';

const appReducer = combineReducers({
  profilePage: require('./profilePage').default,
});

export default appReducer;
