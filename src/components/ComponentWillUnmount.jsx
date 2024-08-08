import React from "react";

class ComponentWillUnmount extends React.Component {
  constructor() {
    console.log("hi from constructor");
    super();
  }

  componentDidMount() {
    this.intervalCounter = 0;
    this.intervalID = setInterval(() => {
      ++this.intervalCounter;
      console.log(`Interval Counter: ${this.intervalCounter}`);
    }, 1000);
    console.log("hi from componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("hi from componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("hi from shouldComponentUpdate");
  }

  componentWillUnmount() {
    console.log("interval cleared by clean up function componentWillUnmount");
    clearInterval(this.intervalID);
  }

  render() {
    console.log("hi from render");
    return <h4>ComponentWillUnmount</h4>;
  }
}

export default ComponentWillUnmount;
