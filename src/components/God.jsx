import React from "react";
import "./God.css";

class God extends React.Component {
  render() {
    const { name, dialogue, email } = this.props;
    return (
      <div className="container">
        <h2>{name}</h2>
        <p>{dialogue}</p>
        <em>{email}</em>
      </div>
    );
  }
}

/*
const God = ({ name, email, dialogue }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <p>{dialogue}</p>
      <em>{email}</em>
    </div>
  );
};
*/

export default God;
