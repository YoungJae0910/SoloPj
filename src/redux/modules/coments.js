import { v4 as uuid } from "uuid";

const ADD_COMMENT = "ADD_COMMENT";

export function addComments(payload) {
  return {
    type: ADD_COMMENT,
    payload,
  };
}

const initialState = [
  {
    id: "사..살려주시라요",
    title: "hi1",
    passward: uuid(),
    contents: "hello world1",
  },
  {
    id: "사..살려주시라요",
    title: "hi2",
    passward: uuid(),
    contents: "hello world2",
  },
  {
    id: "사..살려주시라요",
    title: "hi3",
    passward: uuid(),
    contents: "hello world3",
  },
];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default comments;
