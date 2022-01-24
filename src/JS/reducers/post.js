// step1 IMPORT type of actions
import { ADDPOST } from "../actionTypes/counter";
// step2
const initialState = {
  posts: [
    { id: Math.random(), text: "First Post" },
    { id: Math.random(), text: "second Post" },
    { id: Math.random(), text: "third Post" },
  ],
  toggle: true,
};

// step3 pure function
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};

// step4
export default postReducer;
