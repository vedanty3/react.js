import React from "react";

class ComponentDidUpdate extends React.Component {
  constructor() {
    console.log("hi from constructor");
    super();
    this.state = {
      nameLength: 0,
    };
  }

  componentDidMount() {
    console.log("hi from componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    // only get called when props or state gets updated
    console.log(prevProps);
    console.log(prevState);
    console.log("hi from componentDidUpdate");
  }

  updateNameLength = () => {
    this.setState({ nameLength: Math.floor(Math.random() * 10) });
  };

  render() {
    console.log("hi from render");
    const { name } = this.props;
    return (
      <div>
        <h4>ComponentDidUpdate</h4>
        <p>Name: {name}</p>
        <button onClick={this.updateNameLength}>update name length</button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
