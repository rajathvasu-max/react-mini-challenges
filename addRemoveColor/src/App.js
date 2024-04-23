import { useState, useEffect } from 'react';
import './App.css';


function App() {
  let timerId;
  const eleArr = [1,1,1,1,1,1,1,1,1]
  const [colorArr, setColorArr] = useState([])

  useEffect(() => {
    if(colorArr.includes(eleArr.length-1)) {
      removeHandler()
    }
  
  },[colorArr])
  
  const clickHandler = (id) => {
    const tempcolorArr = [...colorArr,id]
    setColorArr([...tempcolorArr])

  }

  const removeHandler  = () => {
    const updatedColorArr= [...colorArr]
    const removeColor = () => {
      if(updatedColorArr.length >0) {
        updatedColorArr.pop()
        setColorArr([...updatedColorArr])
      }
      else {
        clearInterval(timerId)
      }
    }
    timerId= setInterval(removeColor, 1000)
  }

  return (
    <div className="App">
      <div className='grid-container'>
      {eleArr.map((item,id) => (
        <button key={id}
        className= {colorArr.includes(id) ? "updated-element": "element"}
        onClick={() => clickHandler(id)}>{item}</button>
      ))}
      </div>  
    </div>
  );
}

export default App;
