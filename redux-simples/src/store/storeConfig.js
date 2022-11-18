import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case "NUM_MIN_ALTERED":
        return {
          ...state,
          min: action.payload,
        };
      case "NUM_MAX_ALTERED":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 0,
          max: 5,
        };
    }
  },
  names: function (state, action) {
    console.log(state, "", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
