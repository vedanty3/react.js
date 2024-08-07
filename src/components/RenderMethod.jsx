import React from "react";

class RenderMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("inside render method");
    return (
      <div>
        <h3>Render Method Counter: {this.state.counter}</h3>
        <h3>Prop: {this.props.name}</h3>
        <button onClick={this.incrementCounter}>increment counter</button>
      </div>
    );
  }
}

export default RenderMethod;
