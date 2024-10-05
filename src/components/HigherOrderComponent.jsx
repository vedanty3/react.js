import React from "react";
import { useEffect, useState } from "react";

const withLogging = (WrappedComponent) => {
  return function WithLogging(props) {
    useEffect(() => {
      console.log(props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

const MessageDisplay = ({ message }) => {
  return <h3>{message}</h3>;
};

const HigherOrderComponent = () => {
  const [message, setMessage] = useState("Hello, World!");
  const LoggedMessageDisplay = withLogging(MessageDisplay);

  return (
    <div>
      <LoggedMessageDisplay message={message} />
      <button onClick={() => setMessage("Hello, React!")}>Send</button>
    </div>
  );
};

export default HigherOrderComponent;
