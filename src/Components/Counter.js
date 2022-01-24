import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../JS/actions/counter";
const Counter = () => {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Counter</h1>
      <button onClick={() => dispatch(decrement(5))}> Decrement</button>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment(5))}> Increment</button>
    </div>
  );
};

export default Counter;
