import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let timerId;
  const [progressbarWidth, setProgressbarWidth] = useState(0);

  const startHandler = () => {
    const startprogress = () => {
      setProgressbarWidth((previousValue) => {
        const updatedValue = previousValue +10
        if(updatedValue >= 100) {
          clearInterval(timerId)
        }
        return updatedValue;
      })
    }
    timerId = setInterval(startprogress,1000);
  }
  
    return (
    <div className="App">
      <h3 style={{textAlign: "center"}}>Increment Progressbar everySecond by 10%</h3>
     <div className="progressbar-container">
      <div className="progressbar" style={{ width: `${progressbarWidth}%`}}></div>
     </div>
     <button onClick={startHandler}>Start Progress</button>
    </div>
  );
}

export default App;
