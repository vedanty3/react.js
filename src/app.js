import { useState } from "react";
import "./App.css";
import ClassComponentWithState from "./components/ClassComponentWithState";
import Component from "./components/Component";
import ConditionalRendering from "./components/ConditionalRendering";
import FormHandling from "./components/FormHandling";
import FormValidation from "./components/FormValidation";
import FunctionAsProp from "./components/FunctionAsProp";
import Gods from "./components/Gods";
import ConstructorMethod from "./components/ConstructorMethod";
import RenderMethod from "./components/RenderMethod";
import ComponentDidMount from "./components/ComponentDidMount";
import ComponentDidUpdate from "./components/ComponentDidUpdate";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import ComponentWillUnmount from "./components/ComponentWillUnmount";
import UseEffectHook from "./components/UseEffectHook";
import Style from "./components/Style";
import Bootstrap from "./components/Bootstrap";
import MapFunction from "./components/MapFunction";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fay",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];

function App() {
  const [name, setName] = useState("Vedant Yetekar");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  const changeName = () => {
    setName(names[Math.floor(Math.random() * 10)]);
  };

  return (
    <div className="App">
      {/*
      <div>
        <h3>Counter: {counter}</h3>
        <FunctionAsProp handleClick={handleClick} />
      </div>
       <Gods />
      <Component />
      <ClassComponentWithState />
      <FormHandling />
      <ConditionalRendering />
      <FormValidation />
      <ConstructorMethod />
      <div>
        <RenderMethod name={name} />
        <button onClick={changeName}>change name</button>
      </div>
      <ComponentDidMount />
      <div>
        <ComponentDidUpdate name={name} />
        <button onClick={changeName}>change name</button>
      </div>
      <ShouldComponentUpdate />
      <div>
        {show && <ComponentWillUnmount />}
        <button onClick={() => setShow((prevState) => !prevState)}>
          toggle
        </button>
      </div>
      <div>
        <h4>Counter: {counter}</h4>
        <button onClick={handleClick}>plus</button>
        {show && <UseEffectHook />}
        <button onClick={() => setShow((prevState) => !prevState)}>
          toggle
        </button>
      </div>
      <Style />
      <Bootstrap />
        */}
      <MapFunction />
    </div>
  );
}

export default App;
