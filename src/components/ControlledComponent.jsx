import React, { useState } from "react";

const ControlledComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          onChange={handleTextChange}
          value={text}
          style={{ padding: "4px" }}
          placeholder="type something"
        />
      </div>
      <div>Text: {text}</div>
    </div>
  );
};

export default ControlledComponent;
