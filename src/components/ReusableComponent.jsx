import React from "react";
import "./ReusableComponent.css";

function ReusableComponent({ backgroundColor }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="box"></div>
  );
}

export default ReusableComponent;
