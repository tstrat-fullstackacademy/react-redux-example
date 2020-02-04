import { SET_COUNT, SET_NAME } from './actionCreators';

const INITIAL_STATE = {
  count: 0,
  name: ''
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default reducer;
