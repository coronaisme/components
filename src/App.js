import React, { useState } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeypadComponent from "./components/KeypadComponent";

function App() {
  const [result, setResult] = useState(" ");

  const calculate = () => {
    try {
      setResult({
        result: (eval(result) || "") + "",
      });
    } catch (e) {
      setResult({
        result: "error",
      });
    }
  };

  const reset = () => {
    setResult({
      result: "",
    });
  };

  const backspace = () => {
    setResult({
      result: result.slice(0, -1),
    });
  };

  

  return (
    <div className="Calculator">
      <h1>Calculate!</h1>
      <ResultComponent result={result} />
      <KeypadComponent onClick={onClick} />
    </div>
  );
}

export default App;
