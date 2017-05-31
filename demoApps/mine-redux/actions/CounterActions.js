import * as types from '../constants/ActionTypes';


export function inc() {
  return {
    type: types.INCREMENT,
    delta: 2
  };
}

export function dec() {
  return {
    type: types.DECREMENT,
    delta: -2
  };
}
