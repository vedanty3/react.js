import { forwardRef } from "react";

const ForwardRefComponent = forwardRef((props, ref) => {
  function focus() {
    ref.current.focus();
    ref.current.style.backgroundColor = "salmon";
  }
  return <button onClick={focus}>focus</button>;
});

export default ForwardRefComponent;
