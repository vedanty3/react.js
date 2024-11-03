import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";

const UseLayoutEffectHook = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      console.log("hi from useEffect");
      setWidth(elementRef.current.getBoundingClientRect().width);
    }
  }, []);

  useLayoutEffect(() => {
    console.log("hi from useLayoutEffect");
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h3
        ref={elementRef}
        style={{
          padding: "5px",
          textAlign: "center",
          width: "300px",
          backgroundColor: "cyan",
        }}
      >
        Hello world !
      </h3>
      <h2>Width: {width}px</h2>
    </div>
  );
};

export default UseLayoutEffectHook;
