import React from "react";

class ComponentDidMount extends React.Component {
  constructor() {
    super();
    // 1
    console.log("hi from constructor");
  }

  componentDidMount() {
    // 3
    // thus binding of event listeners and api calls are being initialized inside this method as it is being called after render method
    console.log("hi from componentDidMount");
  }

  render() {
    // 2
    console.log("hi from render");
    return <h4>ComponentDidMount</h4>;
  }
}

export default ComponentDidMount;
