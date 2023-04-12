import "./App.css";

function App() {
  return (
    <div className="App container-lg">
      <h1 className="m-3">Simplest Working Calculator App</h1>
      <input
        name="text"
        className="input m-3"
        pattern="\d+"
        placeholder="Input Your First Number to Calculate"
      ></input>
      <span style={{ fontSize: "28px" }}>+</span>
      <input
        name="text"
        className="input m-3"
        pattern="\d+"
        placeholder="Input Your Second Number to Calculate"
      ></input>
      <div className="d-flex justify-content-center m-3">
        <button className="p-2 m-1 op">Add</button>
        <button className="p-2 m-1 op">Subtract</button>
        <button className="p-2 m-1 op">Multiply</button>
        <button className="p-2 m-1 op">Divide</button>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className="reset p-2 m-1">Reset Input</button>
        <button className="reset p-2 m-1">Reset Result</button>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className="equal">Equal = </button>
      </div>
    </div>
  );
}

export default App;
