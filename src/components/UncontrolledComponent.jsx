import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const inputRef3 = document.getElementById("input3");
    console.log(
      `${inputRef1?.current?.value} ${inputRef2?.current?.value} ${inputRef3?.value}`
    );
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input ref={inputRef1} />
        </div>
        <div>
          <input ref={inputRef2} />
        </div>
        <div>
          <input id="input3" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
