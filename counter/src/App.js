import { useState } from "react";
import "./App.css";
import Demo from "./Demo";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const increament = () => {
    setCounter1(counter1 + 1);
    setCounter2(counter2 + 1);
    setCounter3(counter3 + 1);
  };

  const decrement = () => {
    setCounter1(counter1 - 1);
    setCounter2(counter2 - 1);
    setCounter3(counter3 - 1);
  };
  const reset = () => {
    setCounter1(0);
    setCounter2(0);
    setCounter3(0);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <h1> {counter1} </h1>
        <span>
          <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        </span>
        <span>
          <button onClick={() => setCounter1(counter1 - 1)}>-</button>
        </span>
        <span>
          <button onClick={() => setCounter1(0)}>Reset</button>
        </span>
      </div>

      <div>
        <h1> {counter2} </h1>
        <span>
          <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </span>
        <span>
          <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        </span>
        <span>
          <button onClick={() => setCounter2(0)}>Reset</button>
        </span>
      </div>

      <div>
        <h1> {counter3} </h1>
        <span>
          <button onClick={() => setCounter3(counter3 + 1)}>+</button>
        </span>
        <span>
          <button onClick={() => setCounter3(counter3 - 1)}>-</button>
        </span>
        <span>
          <button onClick={() => setCounter3(0)}>Reset</button>
        </span>
      </div>

      <div>
        <span>
          <button className="all" onClick={increament}>
            Increment All
          </button>
          <button className="all" onClick={decrement}>
            Decrement All
          </button>
          <button className="all" onClick={reset}>
            Reset All
          </button>
        </span>
      </div>

      {/* <Demo /> */}
    </div>
  );
}

export default App;
