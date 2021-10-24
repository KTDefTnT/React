import { createStore, applyMiddleware } from "../Redux";
import thunk from "../thunk";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return 0;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
