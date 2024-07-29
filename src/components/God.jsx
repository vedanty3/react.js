import React from "react";
import "./God.css";

const God = ({ name, email, dialogue }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <p>{dialogue}</p>
      <em>{email}</em>
    </div>
  );
};

export default God;
