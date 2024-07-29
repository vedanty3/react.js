import React from "react";

class ClassComponentWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.incrementCounter()}>increment</button>
      </div>
    );
  }
}

export default ClassComponentWithState;
