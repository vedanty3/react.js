import React from "react";
import "./LifecycleComponent.css";

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    return nextState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot, this.state.counter);
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div className="counter-container">
        <div>Counter: {this.state.counter}</div>
        <div className="btn-container">
          <button onClick={this.incrementCounter}>Increment</button>
        </div>
      </div>
    );
  }
}

export default LifecycleComponent;
