// Step1: import constants
import { DECREMENT, INCREMENT } from "../actionTypes/counter";

//etape2/  definir initial State
const initialState = {
  count: 0,
  x: 5,
  y: 8,
};

// -------------------------------------------------------------------------
// etape 3: pure function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case INCREMENT:
      return { ...state, count: state.count + action.payload };

    default:
      return state;
  }
};

export default counterReducer;
