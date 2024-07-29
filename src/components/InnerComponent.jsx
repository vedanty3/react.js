import React, { useState } from "react";

const InnerComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    setIsVisible((prevState) => !prevState);
  }

  console.log("inner");

  return (
    <div>
      <div>Inner Component</div>
      <button onClick={toggleVisible}>{!isVisible ? "show" : "hide"}</button>
    </div>
  );
};

export default InnerComponent;
