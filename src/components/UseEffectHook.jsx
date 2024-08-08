import React, { useEffect, useState } from "react";

let fl = 0;
let intervalID = 0;
let intervalCounter = 0;

function UseEffectHook() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (fl) {
      console.log("hi from componentDidUpdate");
    } else {
      intervalID = setInterval(() => {
        ++intervalCounter;
        console.log(`Interval Counter: ${intervalCounter}`);
      }, 1000);
      console.log("hi from componentDidMount");
    }
    fl = 1;

    return () => {
      clearInterval(intervalID);
    };
  }, [counter]);

  return (
    <div>
      <h4>useEffect Hook Counter: {counter}</h4>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        increment
      </button>
    </div>
  );
}

export default UseEffectHook;
