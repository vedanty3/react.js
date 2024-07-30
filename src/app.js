import "./App.css";
import ClassComponentWithState from "./components/ClassComponentWithState";
import Component from "./components/Component";
import ConditionalRendering from "./components/ConditionalRendering";
import FormHandling from "./components/FormHandling";
import Gods from "./components/Gods";

function App() {
  return (
    <div className="App">
      {/* <Component />
      <ClassComponentWithState /> 
      <Gods />
      <FormHandling />
      */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
