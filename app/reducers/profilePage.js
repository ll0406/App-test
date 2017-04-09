import {GCHANGE, SCHANGE, SET_NAME, SET_BIRTHDAY, SET_NEWSOFFSET, SET_PHOTO} from '../constants';

const initialState = {
  profileKeys: ['key0', 'key3'], //First gender, second status
  name: 'UNKNOWN',
  bd: new Date(),
  newsOffset: 0,
  photoUri: null,
  personList: [],
  potentialList: []
};

const profileReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  const {type, payload} = action

  switch (type) {
    case GCHANGE: {
      newState.profileKeys[0] = payload
      break;
    }
    case SCHANGE: {
      newState.profileKeys[1] = payload
      break;
    }
    case SET_NAME: {
      newState.name = payload
      break;
    }
    case SET_BIRTHDAY: {
      newState.bd = payload
      break;
    }
    case SET_PHOTO: {
      newState.photoUri = payload
      break;
    }

    // This is the NEWS Part
    case SET_NEWSOFFSET: {
      newState.newsOffset = payload
      break;
    }
  }
  console.log(newState)
  return newState
};

export default profileReducer;
