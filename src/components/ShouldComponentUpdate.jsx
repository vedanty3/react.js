import React from "react";

class ShouldComponentUpdate extends React.Component {
  constructor() {
    console.log("hi from constructor");
    super();
    this.state = {
      count: 0,
      name: "Vedant Yetekar",
    };
  }

  componentDidMount() {
    console.log("hi from componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log("hi from componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("hi from shouldComponentUpdate");
    if (nextState.count === this.state.count) {
      return false;
    }
    return true;
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count,
    }));
  }

  render() {
    console.log("hi from render");
    return (
      <div>
        <h4>ShouldComponentUpdate Counter: {this.state.count}</h4>
        <button onClick={() => this.incrementCount()}>plus</button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
