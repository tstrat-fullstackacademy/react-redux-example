export const SET_COUNT = 'SET_COUNT';
export const SET_NAME = 'SET_NAME';

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
