import { useState, useMemo } from "react";
import { findPrime } from "./heavyOperation";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => findPrime(number), [number]);
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>Number : {result}</h1>
      <h1>Text : {text}</h1>
    </div>
  );
}
