import useTimer from "./useTimer";
import "./App.css";

function App() {
  const {isRunning, start, stop, seconds} = useTimer(5)
  return (
    <div className="App">
      <div className="container">
      <h1>useTimer custom hook</h1>
      <h2>{isRunning ? seconds: "No timer running!"}</h2>
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
      </div>
    </div>
  );
}

export default App;
