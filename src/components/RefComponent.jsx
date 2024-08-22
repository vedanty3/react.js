import React, { createRef, useRef } from "react";

/*
class RefComponent extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.inputRef.current);
  }

  focus = () => {
    this.inputRef.current.focus();
    this.inputRef.current.style.backgroundColor = "salmon";
  };

  render() {
    return (
      <>
        <input ref={this.inputRef} placeholder="ref tutorial" />
        <button onClick={this.focus}>focus</button>
      </>
    );
  }
}
*/

const RefComponent = () => {
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "salmon";
  }

  return (
    <>
      <input ref={inputRef} placeholder="ref tutorial" />
      <button onClick={focus}>focus</button>
    </>
  );
};

export default RefComponent;
