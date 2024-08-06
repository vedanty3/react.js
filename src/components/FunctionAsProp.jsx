import React from "react";

const FunctionAsProp = ({ handleClick }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>call function from parent</button>
    </div>
  );
};

export default FunctionAsProp;
