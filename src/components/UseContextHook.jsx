import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import CounterComponent from "./CounterComponent";

const UseContextHook = () => {
  // const { counter, setCounter } = useContext(CounterContext);
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => {
        return <CounterComponent counter={counter} setCounter={setCounter} />;
      }}
    </CounterContext.Consumer>
  );
};

export default UseContextHook;
