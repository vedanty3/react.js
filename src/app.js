import { useState } from "react";
import "./App.css";
import ClassComponentWithState from "./components/ClassComponentWithState";
import Component from "./components/Component";
import ConditionalRendering from "./components/ConditionalRendering";
import FormHandling from "./components/FormHandling";
import FormValidation from "./components/FormValidation";
import FunctionAsProp from "./components/FunctionAsProp";
import Gods from "./components/Gods";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <div>
        <h3>Counter: {counter}</h3>
        <FunctionAsProp handleClick={handleClick} />
      </div>
      {/* <Gods />
      <Component />
      <ClassComponentWithState />
      <FormHandling />
      <ConditionalRendering />
      <FormValidation /> */}
    </div>
  );
}

export default App;
