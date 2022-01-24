import { combineReducers } from "redux";
import counterReducer from "./counter";
import postReducer from "./post";
const rootReducer = combineReducers({ counterReducer, postReducer });
export default rootReducer;
