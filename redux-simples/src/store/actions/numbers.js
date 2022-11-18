import { NUM_MAX_ALTERED, NUM_MIN_ALTERED } from "../actions/actionTypes";

export function altMinNumber(newNumber) {
  return {
    type: "NUM_MIN_ALTERED",
    payload: newNumber,
  };
}

export function altMaxNumber(newNumber) {
  return {
    type: "NUM_MAX_ALTERED",
    payload: newNumber,
  };
}
