const INITIAL_STATE = {
  count: 0,
  name: ''
};

const SET_COUNT = 'SET_COUNT';
const SET_NAME = 'SET_NAME';

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

export function setCount(newCount) {
  return {
    type: SET_COUNT,
    payload: newCount
  };
}

export function setName(newName) {
  return {
    type: SET_NAME,
    payload: newName
  };
}
