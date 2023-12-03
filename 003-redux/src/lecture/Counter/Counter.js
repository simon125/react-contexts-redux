import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateCustomValue,
  decrement,
  increment,
  reset,
  selectCounterValue,
} from "../../store/counterSlice";
import { Link } from "react-router-dom";

export const Counter = () => {
  const [customValue, setCustomValue] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector(selectCounterValue);

  return (
    <article>
      <Link to="/lecture">Lecture</Link>

      <input
        value={customValue}
        onChange={(event) => setCustomValue(event.target.value)}
        type="text"
        placeholder="Custom value"
      />
      <button
        onClick={() => {
          dispatch(calculateCustomValue(customValue));
        }}
      >
        Add custom value
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </button>
      <input type="text" value={value} readOnly />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </article>
  );
};
