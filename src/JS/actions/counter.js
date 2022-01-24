//

import { DECREMENT, INCREMENT } from "../actionTypes/counter";

export const decrement = (data) => {
  return { type: DECREMENT, payload: data };
};

export const increment = (data) => {
  return { type: INCREMENT, payload: data };
};
