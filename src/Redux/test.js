export default function combineReducer(reducers) {
  return (state = {}, action) => {
    let newState;
    for (let key in reducers) {
      let reducer = reducers(key);
      newState[key] = reducer(state[key], action);
    }

    return newState;
  }
}