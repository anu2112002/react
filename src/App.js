import React from 'react';
import {useState} from 'react';
function App() {
  const[state, setState]= useState(0)  
    const handleIncrease=() =>  setState(state+1);
    const handleDecrease=() => setState(state-1);
  return (
    <div>
    <div>{state}</div>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    
    </div>
  );
}

export default App;
