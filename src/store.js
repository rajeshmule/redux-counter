import { createStore } from "redux";


function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

