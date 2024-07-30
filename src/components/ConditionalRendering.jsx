import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //   const fruits = [];
  const fruits = ["Apple", "Banana", "Guava", "Kiwi", "Mango", "Orange"];

  return (
    <div>
      <div>
        {fruits.length > 0 ? (
          <ul>
            {fruits.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        ) : (
          <p>No items to display</p>
        )}
      </div>
      {isLoggedIn && <div>Welcome Vedant Yetekar!</div>}
    </div>
  );
};

export default ConditionalRendering;
