import React, { useState } from "react";
import "./App.css";
import ClassBased from "./ClassBased";
export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, nisi{" "}
        </p>
      ) : null}
    </div>
  );
}
