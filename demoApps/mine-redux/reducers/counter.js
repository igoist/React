import { INCREMENT, DECREMENT } from '../constants/ActionTypes';

const initialState = [{
  value: 50
}];

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT:
    return [{ value: state[0].value + action.delta }];

  case DECREMENT:
    return [{ value: state[0].value + action.delta }];

  default:
    return state;
  }
}
