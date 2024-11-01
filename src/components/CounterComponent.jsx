import "./UseContextHook.css";
import React from "react";

const CounterComponent = ({ counter, setCounter }) => {
  return (
    <div className="reducer-box">
      <div>{counter}</div>
      <div className="btn-container">
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
