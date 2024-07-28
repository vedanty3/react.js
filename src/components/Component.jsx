import React, { Component as ClassComponent } from "react";

const Component = () => {
  const greet = () => {
    alert("hello world!");
  };

  return <button onClick={greet}>click</button>;
};

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
