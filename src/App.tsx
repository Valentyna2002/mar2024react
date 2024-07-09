import React, {useEffect, useReducer, useRef, useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";


const App = () => {
    const [isToggled,handleToggle] = useToggle(false)



    const [counter, setCounter] = useState<number>(0)
    const [currentValue,prevValue] = usePrevious(counter)



  return (
      <div>
          <button onClick={handleToggle} >
              { isToggled ? 'ON':'OFF'}
          </button>
           <div>
               <p>Current count: {currentValue}</p>
               <p>Previous count:{prevValue}</p>
               <button onClick={()=> setCounter(counter+1)}>click</button>
           </div>
      </div>
  );}


export default App;
