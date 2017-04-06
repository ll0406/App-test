import {GCHANGE, SCHANGE, SET_NAME, SET_BIRTHDAY} from '../constants';

export const gChange = (key) => ({
  type: GCHANGE,
  payload: key
});

export const sChange = (key) => ({
  type: SCHANGE,
  payload: key
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name
});

export const setBD = (date) => ({
  type: SET_BIRTHDAY,
  payload: date
});
