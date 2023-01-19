const ADD_COMMENT = "ADD_COMMENT";

export function addComments(payload) {
  return {
    type: ADD_COMMENT,
    payload,
  };
}

const initialState = [
  {
    id: 1,
    title: "hi1",
    contents: "hello world1",
  },
  {
    id: 2,
    title: "hi2",
    contents: "hello world2",
  },
  {
    id: 3,
    title: "hi3",
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
