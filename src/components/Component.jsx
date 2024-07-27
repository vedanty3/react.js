import { Component as ClassComponent } from "react";

/*
const Component = () => {
  return <div>I'm a component.</div>;
};
*/

class Component extends ClassComponent {
  render() {
    return <div>I'm a component.</div>;
  }
}

export default Component;
