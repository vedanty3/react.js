import React from "react";
import { Button } from "react-bootstrap";

function ButtonComponent({ action, handleClick, variant }) {
  return (
    <Button variant={variant} style={{ width: "100px" }} onClick={handleClick}>
      {action}
    </Button>
  );
}

export default ButtonComponent;
