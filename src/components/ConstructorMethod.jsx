import React from "react";

class ConstructorMethod extends React.Component {
  constructor() {
    console.log("inside constructor ");
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("inside render");
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <h1>Constructor Method</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          click
        </button>
      </div>
    );
  }
}

export default ConstructorMethod;
