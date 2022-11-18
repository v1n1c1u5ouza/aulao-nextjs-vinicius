import { NUM_MAX_ALTERED, NUM_MIN_ALTERED } from "../actions/actionTypes";

const initalState = {
  min: 1,
  max: 10,
};

export default function (state = initalState, action) {
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
      return state;
  }
}
