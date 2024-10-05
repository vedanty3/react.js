import React, { memo } from "react";

const ChildComponent = ({ incrementCounter }) => {
  console.log("child");
  return (
    <div>
      <button onClick={() => incrementCounter()}>increment</button>
    </div>
  );
};

export default memo(ChildComponent);
