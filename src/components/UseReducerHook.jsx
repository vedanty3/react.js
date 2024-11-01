import React, { useReducer, useState } from "react";
import "./UseReducerHook.css";

const INITIAL_STATE = 0;

const reducerActions = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducerActions, INITIAL_STATE);

  return (
    <div className="reducer-box">
      <div>{state}</div>
      <div className="btn-container">
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
