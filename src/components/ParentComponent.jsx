import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  console.log("parent");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount2((count2) => count2 + 1);
  }, []);

  return (
    <div>
      <div>
        <div>Count: {count1}</div>
        <button onClick={() => setCount1(count1 + 1)}>increment</button>
      </div>
      <div>
        <div>Count: {count2}</div>
        <ChildComponent incrementCounter={incrementCounter} />
      </div>
    </div>
  );
};

export default ParentComponent;
