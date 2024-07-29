import React, { Component as ClassComponent, useState } from "react";
import InnerComponent from "../components/InnerComponent";

const Component = () => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  console.log("outer");
  return (
    <div>
      <div>{value}</div>
      <div>Outer Component</div>
      <InnerComponent />
      <button onClick={incrementValue}>click</button>
    </div>
  );
};

/*
const Component = () => {
  const greet = () => {
    alert("hello world!");
  };
  return <button onClick={greet}>click</button>;
};
*/

/*
class Component extends ClassComponent {
  render() {
    return <div>I'm a component.</div>;
  }
}
*/

/*
const Component = () => {
  return React.createElement(
    "div",
    null,
    "outer",
    React.createElement("div", null, "inner")
  );
};
*/

export default Component;
