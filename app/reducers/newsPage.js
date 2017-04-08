import {SET_NEWSOFFSET} from '../constants';

const initialState = {
    newsOffset: 0
};

export const newsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  const {type, payload} = action

  switch (type) {
    case SET_NEWSOFFSET: {
      newState.newsOffset = payload
      break;
    }
  }
  console.log(newState)
  return newState
};
