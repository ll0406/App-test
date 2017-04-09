import {SET_NEWSOFFSET} from '../constants';

export const setNewsOffset = (offset) => ({
  type: SET_NEWSOFFSET,
  payload: offset
});
