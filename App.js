import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState("Your Result");

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  const handleResetInput = () => {
    setNum1(0);
    setNum2(0);
  };

  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="App container-lg">
      <h1 className="m-3">Simplest Working Calculator App</h1>
      <input
        type="number"
        name="num1"
        className="input m-3"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Input Your First Number to Calculate"
      ></input>
      <input
        type="number"
        name="num2"
        className="input m-3"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Input Your Second Number to Calculate"
      ></input>
      <div className="d-flex justify-content-center m-3">
        <p className="input m-3">{result}</p>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className="p-2 m-1 op" onClick={handleAdd} name="arop">
          Add
        </button>
        <button className="p-2 m-1 op" onClick={handleSubtract}>
          Subtract
        </button>
        <button className="p-2 m-1 op" onClick={handleMultiply}>
          Multiply
        </button>
        <button className="p-2 m-1 op" onClick={handleDivide}>
          Divide
        </button>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className="reset p-2 m-1" onClick={handleResetInput}>
          Reset Input
        </button>
        <button className="reset p-2 m-1" onClick={handleResetResult}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default App;
