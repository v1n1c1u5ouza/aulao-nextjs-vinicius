import Axios from "axios";

const URL = "http://localhost:3004/api/todos";

export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

export const search = () => {
  const request = Axios.get(`${URL}?sort=-creatAt`);
  return {
    type: "TODO_SEARCHED",
    payload: request,
  };
};

export const add = (description) => {
  const request = Axios.post(URL, { description });
  return {
    type: "TODO_ADDED",
    payload: request,
  };
};
