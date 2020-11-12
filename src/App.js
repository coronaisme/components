import React, { useState } from "react";
// import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeypadComponent from "./components/KeypadComponent";

function App() {
  const [result, setResult] = useState(" ");

  const onClick = button => {
    if(button === "=") {
      calculate()
    } else if(button === "C") {
      reset()
    } else if(button === "CE") {
      backspace()
    } else {
      setResult(
        result + button
      )
    }
  }

  const calculate = () => {
    try {
      setResult(
        [(eval(result) || " ") + " " ] 
      );
    } catch (e) {
      setResult(
         "error"
      );
    }
  };

  const reset = () => {
    setResult(
      " ",
    );
  };

  const backspace = () => {
    setResult(
      result.slice(0, -1),
    );
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
