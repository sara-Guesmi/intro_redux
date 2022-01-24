import { ADDPOST } from "../actionTypes/counter";

export const addPost = (newPost) => {
  return {
    type: ADDPOST,
    payload: newPost,
  };
};
