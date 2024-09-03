import React, { createRef, forwardRef, useRef } from "react";
import ForwardRefComponent from "./ForwardRefComponent";

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

  return (
    <>
      <input ref={inputRef} placeholder="ref tutorial" />
      <ForwardRefComponent ref={inputRef} />
    </>
  );
};

export default RefComponent;
